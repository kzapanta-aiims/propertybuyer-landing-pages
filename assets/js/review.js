/* Client review overlay.
 *
 * Loaded only by review-loader.js, only behind the ?review=1 gate. Lets a
 * client click any element and leave a comment with photos, or leave
 * general feedback about the page as a whole, all with no account and no
 * signup. Threads live in the feedback hub (see data-review-hub); the
 * owner pulls them, makes the changes, replies and resolves, and the
 * client sees a green tick with a note on their next visit.
 *
 * House rules this file must keep, in the spirit of the pages it rides on:
 *   - the entire UI lives in a shadow root on one fixed host, so no style
 *     leaks in either direction and the page's own stylesheets never see it
 *   - it never mutates the page's DOM outside its own host: what the
 *     client reviews is exactly the page, not the page plus our edits
 *   - all motion respects prefers-reduced-motion
 *   - classic script, so it also runs when a page is opened from disk
 *
 * It works on static multi-page sites and on single-page apps alike. For
 * the latter it wraps history.pushState and replaceState to notice route
 * changes, which is the one thing it changes about the host page beyond
 * its own subtree; both wrappers call through to the original.
 */
(function () {
  'use strict';

  var script = document.currentScript;
  if (!script) return;
  var SITE = script.getAttribute('data-review-site');
  var HUB = (script.getAttribute('data-review-hub') || '').replace(/\/$/, '');
  if (!SITE || !HUB) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Which page a comment belongs to. Recomputed rather than captured once:
     in a single-page app the route changes without a document load, and a
     comment left on /settings must not be filed under /.

     The path is the identity. The query deliberately is not: these pages
     take paid traffic, so counting it would file the same headline under
     a different page for every gclid and utm_source that walks in. The
     hash counts only when it looks like a route, so a hash router scopes
     correctly while an ordinary #anchor link does not split a page in two.

     An app that genuinely routes on the query (?tab=billing) opts in with
     data-review-scope="path+query" on the script tag, and the tracking
     parameters below are still dropped so the fragmenting problem does
     not come back with it. */

  var SCOPE = script.getAttribute('data-review-scope') || 'path';

  var TRACKING = /^(review|utm_[a-z]+|gclid|dclid|fbclid|msclkid|ttclid|li_fat_id|gad_source|gbraid|wbraid|mc_[a-z]+|_hs[a-z]*|ref|referrer)$/i;

  function currentPage() {
    var p = window.location.pathname.replace(/index\.html$/, '') || '/';
    if (SCOPE === 'path+query' && window.location.search) {
      var kept = [];
      new URLSearchParams(window.location.search).forEach(function (v, k) {
        if (!TRACKING.test(k)) kept.push([k, v]);
      });
      if (kept.length) {
        kept.sort(function (a, b) { return a[0] < b[0] ? -1 : 1; }); /* order must not create a new page */
        p += '?' + kept.map(function (kv) {
          return encodeURIComponent(kv[0]) + '=' + encodeURIComponent(kv[1]);
        }).join('&');
      }
    }
    var h = window.location.hash;
    if (h.indexOf('#/') === 0) p += h;
    return p;
  }

  var PAGE = currentPage();

  /* ---- state ------------------------------------------------------------ */

  var allThreads = [];     /* every thread for this site, every page */
  var threads = [];        /* the current page's, in display order */
  var pins = [];           /* { thread, el } for anchored threads we resolved */
  var mode = null;         /* null | 'pick' */
  var openPopover = null;  /* the one popover allowed at a time */
  var rafPending = false;

  function store(key, val) {
    try {
      if (arguments.length === 2) localStorage.setItem(key, JSON.stringify(val));
      else return JSON.parse(localStorage.getItem(key));
    } catch (e) { return null; }
  }

  /* Nobody is asked who they are: a name field is one more thing between
     the client and the comment, and the round is already scoped to one
     client. Every comment reads as "Client". The per-browser id still
     rides along, so two people reviewing the same link stay tellable
     apart in the pulled data without either being asked to type. */
  var myId = store('review:id');
  if (!myId) { myId = 'anon_' + Math.random().toString(36).slice(2, 8); store('review:id', myId); }

  /* ---- icons ------------------------------------------------------------
     Inline SVG rather than emoji: emoji render as a different glyph on
     every platform, sit off the text baseline, and cannot take the
     colour of the control they are in. These inherit currentColor and
     line up. Single stroke weight, 24-unit grid. */

  var ICONS = {
    comment: '<path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4 19.5l1.3-4.1A7.5 7.5 0 1 1 20 11.5z"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/>' +
            '<path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
    note: '<path d="M5 3.5h14v17H5z"/><path d="M8.5 9h7M8.5 13h7M8.5 17h4"/>',
    camera: '<path d="M21 19.5H3v-12h4l1.8-3h6.4L17 7.5h4z"/><circle cx="12" cy="13.5" r="3.5"/>',
    check: '<path d="M20 6.5L9.5 17 4 11.5"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>',
  };

  function icon(name, size) {
    var span = document.createElement('span');
    span.className = 'ico';
    span.innerHTML = '<svg viewBox="0 0 24 24" width="' + (size || 15) + '" height="' + (size || 15) +
      '" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true" focusable="false">' + ICONS[name] + '</svg>';
    return span;
  }

  /* ---- api -------------------------------------------------------------- */

  function api(path, opts) {
    opts = opts || {};
    return fetch(HUB + path, {
      method: opts.method || 'GET',
      headers: opts.body ? { 'Content-Type': 'application/json' } : undefined,
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (json) {
        if (!res.ok) throw new Error(json.error || ('request failed (' + res.status + ')'));
        return json;
      });
    });
  }

  function uploadImage(file) {
    return downscale(file).then(function (out) {
      return fetch(HUB + '/api/upload?site=' + encodeURIComponent(SITE) +
                   '&name=' + encodeURIComponent(out.name), {
        method: 'POST',
        headers: { 'X-Image-Type': out.type },
        body: out.blob,
      }).then(function (res) {
        return res.json().then(function (json) {
          if (!res.ok) throw new Error(json.error || 'upload failed');
          return json.url;
        });
      });
    });
  }

  /* Longest edge 1600px, JPEG q0.82. A phone photo lands at 200-500 KB,
     far under the hub's 4 MB refusal point. GIFs pass through untouched
     so animation survives. */
  function downscale(file) {
    if (file.type === 'image/gif') {
      return Promise.resolve({ blob: file, type: file.type, name: file.name || 'photo.gif' });
    }
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        URL.revokeObjectURL(url);
        var scale = Math.min(1, 1600 / Math.max(img.width, img.height));
        var canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(function (blob) {
          if (!blob) return reject(new Error('could not read image'));
          resolve({ blob: blob, type: 'image/jpeg', name: (file.name || 'photo').replace(/\.\w+$/, '') + '.jpg' });
        }, 'image/jpeg', 0.82);
      };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('could not read image')); };
      img.src = url;
    });
  }

  /* ---- anchors ----------------------------------------------------------- */

  function normText(el) {
    return (el.innerText || '').replace(/\s+/g, ' ').trim();
  }

  function hashText(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(16);
  }

  function cssPath(el) {
    var parts = [];
    var node = el;
    while (node && node.nodeType === 1 && node !== document.body) {
      if (node.id) { parts.unshift('#' + node.id); break; }
      var tag = node.tagName.toLowerCase();
      var idx = 1, sib = node;
      while ((sib = sib.previousElementSibling)) if (sib.tagName === node.tagName) idx++;
      parts.unshift(tag + ':nth-of-type(' + idx + ')');
      node = node.parentElement;
    }
    if (parts[0] && parts[0][0] !== '#') parts.unshift('body >');
    return parts.join(' > ').replace('body > >', 'body >');
  }

  function nearestHeading(el) {
    var headings = document.querySelectorAll('h1, h2, h3, h4');
    var best = '';
    for (var i = 0; i < headings.length; i++) {
      var pos = headings[i].compareDocumentPosition(el);
      if (pos & Node.DOCUMENT_POSITION_FOLLOWING || headings[i].contains(el)) {
        best = normText(headings[i]).slice(0, 120);
      }
    }
    return best;
  }

  function buildAnchor(el, clientX, clientY) {
    var rect = el.getBoundingClientRect();
    var text = normText(el);
    var sections = document.getElementsByTagName('section');
    var sectionIndex = null;
    var sec = el.closest ? el.closest('section') : null;
    if (sec) for (var i = 0; i < sections.length; i++) if (sections[i] === sec) sectionIndex = i;
    return {
      selector: cssPath(el),
      tag: el.tagName,
      id: el.id || null,
      classes: Array.prototype.slice.call(el.classList, 0, 10),
      text: text.slice(0, 120),
      textHash: hashText(text),
      heading: nearestHeading(el),
      sectionIndex: sectionIndex,
      rect: {
        x: rect.left + window.scrollX, y: rect.top + window.scrollY,
        w: rect.width, h: rect.height,
      },
      point: {
        fx: rect.width ? (clientX - rect.left) / rect.width : 0.5,
        fy: rect.height ? (clientY - rect.top) / rect.height : 0.5,
      },
      viewport: { w: window.innerWidth, h: window.innerHeight, dpr: window.devicePixelRatio || 1 },
    };
  }

  /* Re-finding the element behind an anchor on a page that may have been
     edited since the comment was made. Text first: on hand-written pages,
     the copy is the most durable handle. Selector second. */
  function resolveAnchor(a) {
    if (!a) return null;

    if (a.id) {
      var byId = document.getElementById(a.id);
      if (byId && byId.tagName === a.tag) return byId;
    }

    /* Cheap probe before the scan. When nothing has moved, the recorded
       selector still points at the right element, and confirming it costs
       one query rather than reading innerText off every element of that
       tag. That matters here: innerText forces layout, and in a framework
       app this runs on every burst of DOM mutations. */
    var bySel = null;
    if (a.selector) {
      try { bySel = document.querySelector(a.selector); } catch (e) { /* no longer parses */ }
    }
    if (bySel && (!a.text || normText(bySel).indexOf(a.text) === 0)) return bySel;

    if (a.text) {
      var candidates = document.getElementsByTagName(a.tag || '*');
      var matches = [];
      for (var i = 0; i < candidates.length; i++) {
        var t = normText(candidates[i]);
        if (t && t.indexOf(a.text) === 0) matches.push(candidates[i]);
      }
      if (matches.length === 1) return matches[0];
      if (matches.length > 1) {
        /* Several elements read the same. Prefer the one nearest to where
           the comment was placed. */
        if (a.rect) {
          matches.sort(function (m, n) {
            var my = m.getBoundingClientRect().top + window.scrollY;
            var ny = n.getBoundingClientRect().top + window.scrollY;
            return Math.abs(my - a.rect.y) - Math.abs(ny - a.rect.y);
          });
        }
        return matches[0];
      }
    }

    /* The selector matched but the copy has been edited since. That is the
       element, and anchorChanged flags the difference to the reader. */
    return bySel;
  }

  function anchorChanged(a, el) {
    return !!(a && el && a.textHash && hashText(normText(el)) !== a.textHash);
  }

  /* ---- shadow host and styles ------------------------------------------- */

  var host = document.createElement('div');
  host.style.cssText = 'position:fixed;top:0;left:0;width:0;height:0;z-index:2147483000;';
  var root = host.attachShadow({ mode: 'open' });
  document.documentElement.appendChild(host);

  var css = '' +
    ':host{all:initial}' +
    '*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,Segoe UI,Roboto,sans-serif;' +
      '-webkit-font-smoothing:antialiased}' +
    'button{cursor:pointer;border:0;background:none;font:inherit;color:inherit}' +
    'textarea,input{font:inherit}' +
    '.ico{display:inline-flex;align-items:center;justify-content:center;flex:none}' +
    '.ico svg{display:block}' +

    /* Every scrolling region gets the same thin, dark-friendly bar, so a
       long round reads as intentionally scrollable rather than cut off. */
    '.scroll{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;' +
      'scrollbar-color:#454b57 transparent}' +
    '.scroll::-webkit-scrollbar{width:9px}' +
    '.scroll::-webkit-scrollbar-track{background:transparent}' +
    '.scroll::-webkit-scrollbar-thumb{background:#454b57;border-radius:9px;' +
      'border:2px solid transparent;background-clip:content-box}' +
    '.scroll::-webkit-scrollbar-thumb:hover{background:#5a616f;background-clip:content-box}' +

    '.pill{position:fixed;left:16px;bottom:16px;display:flex;align-items:center;gap:8px;' +
      'background:#16181d;color:#f4f5f7;padding:12px 18px;border-radius:999px;font-size:14px;' +
      'font-weight:600;box-shadow:0 4px 18px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.12);' +
      (reduced ? '' : 'transition:transform .15s ease;') + '}' +
    '.pill:hover{transform:scale(1.04)}' +
    '.pill .count{background:#4f8ef7;border-radius:999px;min-width:20px;height:20px;display:inline-flex;' +
      'align-items:center;justify-content:center;font-size:12px;padding:0 6px}' +
    '@media (max-width:760px){.pill{bottom:84px}}' +

    '.panel{position:fixed;left:16px;bottom:72px;width:320px;max-height:min(65vh,560px);' +
      'background:#16181d;color:#f4f5f7;border-radius:14px;border:1px solid rgba(255,255,255,.12);' +
      'box-shadow:0 10px 40px rgba(0,0,0,.45);display:flex;flex-direction:column;overflow:hidden}' +
    '@media (max-width:760px){.panel{left:8px;right:8px;width:auto;bottom:140px}}' +
    '.panel header{padding:14px 16px 10px;border-bottom:1px solid rgba(255,255,255,.09)}' +
    '.panel header h2{font-size:15px;font-weight:700}' +
    '.panel header p{font-size:12px;color:#9aa1ad;margin-top:2px}' +
    '.panel .actions{display:flex;gap:8px;padding:12px 16px}' +
    '.panel .actions button{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;' +
      'background:#2a2e37;border-radius:9px;padding:10px 8px;font-size:12px;line-height:1.25;' +
      'text-align:center;font-weight:600;color:#f4f5f7;border:1px solid rgba(255,255,255,.09)}' +
    '.panel .actions button.primary{background:#4f8ef7;border-color:transparent}' +
    '.panel ul{list-style:none;padding:4px 8px 10px;flex:1 1 auto;min-height:0}' +
    '.panel li button{display:flex;gap:10px;width:100%;text-align:left;padding:9px 8px;border-radius:9px;' +
      'font-size:13px;line-height:1.35;align-items:flex-start}' +
    '.panel li button:hover{background:#22252c}' +
    '.panel .num{flex:none;width:20px;height:20px;border-radius:999px;background:#4f8ef7;color:#fff;' +
      'font-size:11px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;margin-top:1px}' +
    '.panel .num.done{background:#34a26b}' +
    '.panel .who{color:#9aa1ad;font-size:11px;display:block;margin-top:2px}' +
    '.panel .empty{padding:8px 16px 14px;font-size:13px;color:#9aa1ad}' +

    '.hl{position:fixed;pointer-events:none;border:2px solid #4f8ef7;border-radius:4px;' +
      'background:rgba(79,142,247,.10);display:none}' +
    '.hl .tag{position:absolute;top:-24px;left:-2px;background:#4f8ef7;color:#fff;font-size:11px;' +
      'font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap}' +
    '.capture{position:fixed;inset:0;cursor:crosshair}' +
    '.hint{position:fixed;top:14px;left:50%;transform:translateX(-50%);background:#16181d;color:#f4f5f7;' +
      'font-size:13px;font-weight:600;padding:9px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.14);' +
      'box-shadow:0 4px 18px rgba(0,0,0,.4)}' +

    '.dot{position:fixed;width:24px;height:24px;border-radius:999px;background:#4f8ef7;color:#fff;' +
      'font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;' +
      'box-shadow:0 2px 10px rgba(0,0,0,.35);border:2px solid #fff}' +
    '.dot.done{background:#34a26b}' +

    /* Capped and column-flexed so a thread with twenty replies stays on
       screen: the header, composer and buttons hold their size and the
       message list is the part that scrolls. */
    '.pop{position:fixed;width:340px;max-width:calc(100vw - 24px);max-height:min(80vh,640px);' +
      'display:flex;flex-direction:column;background:#16181d;color:#f4f5f7;' +
      'border-radius:14px;border:1px solid rgba(255,255,255,.12);box-shadow:0 10px 40px rgba(0,0,0,.5);' +
      'padding:14px;font-size:13px}' +
    '@media (max-width:760px){.pop{left:8px!important;right:8px;width:auto;bottom:12px;top:auto!important;' +
      'max-height:min(70vh,560px)}}' +
    '.pop h3{font-size:13px;font-weight:700;margin-bottom:2px;flex:none}' +
    '.pop .ctx{color:#9aa1ad;font-size:12px;margin-bottom:10px;overflow:hidden;text-overflow:ellipsis;' +
      'white-space:nowrap;flex:none}' +
    '.pop textarea{width:100%;min-height:74px;background:#0e0f12;color:#f4f5f7;border:1px solid ' +
      'rgba(255,255,255,.14);border-radius:9px;padding:9px;resize:vertical;flex:none}' +
    '.pop textarea:focus{outline:2px solid #4f8ef7;outline-offset:-1px}' +
    '.pop .row{display:flex;gap:8px;margin-top:10px;align-items:center;flex:none}' +
    '.pop .row .grow{flex:1}' +
    '.pop button.send{background:#4f8ef7;color:#fff;font-weight:700;border-radius:9px;padding:9px 16px}' +
    '.pop button.send[disabled]{opacity:.5;cursor:default}' +
    '.pop button.ghost{color:#9aa1ad;padding:9px 10px;font-weight:600}' +
    '.pop button.attach{display:inline-flex;align-items:center;gap:6px;background:#2a2e37;' +
      'border-radius:9px;padding:9px 12px;font-weight:600;font-size:12px}' +
    '.pop .thumbs{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;flex:none}' +
    '.pop .thumbs .t{position:relative;width:52px;height:52px;border-radius:7px;overflow:hidden;' +
      'border:1px solid rgba(255,255,255,.15)}' +
    '.pop .thumbs img{width:100%;height:100%;object-fit:cover;display:block}' +
    '.pop .thumbs .x{position:absolute;top:0;right:0;background:rgba(0,0,0,.65);color:#fff;width:18px;' +
      'height:18px;font-size:11px;line-height:18px;text-align:center}' +
    '.pop .msgs{flex:1 1 auto;min-height:60px;margin-bottom:10px}' +
    '.pop .msg{padding:8px 0;border-bottom:1px solid rgba(255,255,255,.07)}' +
    '.pop .msg .by{font-size:11px;color:#9aa1ad;margin-bottom:3px;font-weight:600}' +
    '.pop .msg .by.owner{color:#7db4ff}' +
    '.pop .msg img{max-width:96px;max-height:96px;border-radius:7px;margin:6px 6px 0 0;display:inline-block;' +
      'border:1px solid rgba(255,255,255,.15);cursor:zoom-in}' +
    '.pop .status{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:700;' +
      'border-radius:5px;padding:2px 8px;margin-left:6px;vertical-align:1px}' +
    '.pop .status.open{background:#3a3320;color:#e8c15a}' +
    '.pop .status.resolved{background:#1d3a2c;color:#5ad391}' +
    '.pop .warn{background:#3a2a20;color:#e8a15a;font-size:12px;border-radius:7px;padding:7px 9px;' +
      'margin-bottom:8px}' +

    '.toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#16181d;' +
      'color:#f4f5f7;padding:11px 18px;border-radius:10px;font-size:13px;font-weight:600;' +
      'border:1px solid rgba(255,255,255,.14);box-shadow:0 6px 24px rgba(0,0,0,.5)}' +
    '.toast.err{border-color:#c0564f}';

  var style = document.createElement('style');
  style.textContent = css;
  root.appendChild(style);

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---- toast ------------------------------------------------------------- */

  var toastTimer = null;
  function toast(msg, isErr) {
    var t = root.querySelector('.toast');
    if (t) t.remove();
    t = el('div', 'toast' + (isErr ? ' err' : ''), msg);
    root.appendChild(t);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.remove(); }, 3600);
  }

  /* ---- pill and panel ----------------------------------------------------- */

  var pill = el('button', 'pill');
  pill.setAttribute('aria-label', 'Design feedback');
  var pillCount = el('span', 'count', '0');
  pill.appendChild(icon('comment', 16));
  pill.appendChild(el('span', null, 'Feedback'));
  pill.appendChild(pillCount);
  root.appendChild(pill);

  var panel = null;

  function openCount() {
    var n = 0;
    for (var i = 0; i < threads.length; i++) if (threads[i].status === 'open') n++;
    return n;
  }

  function renderPill() {
    pillCount.textContent = String(openCount());
    pillCount.style.display = threads.length ? '' : 'none';
  }

  function closePanel() { if (panel) { panel.remove(); panel = null; } }

  function togglePanel() {
    if (panel) return closePanel();
    closePopover();
    panel = el('div', 'panel');
    var head = el('header');
    head.appendChild(el('h2', null, 'Design feedback'));
    head.appendChild(el('p', null, 'Comment on anything, no account needed. A green tick means it has been actioned.'));
    panel.appendChild(head);

    var actions = el('div', 'actions');
    var pick = el('button', 'primary');
    pick.appendChild(icon('target'));
    pick.appendChild(el('span', null, 'Comment on an element'));
    var general = el('button', null);
    general.appendChild(icon('note'));
    general.appendChild(el('span', null, 'General feedback'));
    actions.appendChild(pick);
    actions.appendChild(general);
    panel.appendChild(actions);

    pick.addEventListener('click', function () { closePanel(); enterPickMode(); });
    general.addEventListener('click', function () {
      closePanel();
      showComposer(null, { x: window.innerWidth / 2 - 170, y: window.innerHeight * 0.25 });
    });

    if (!threads.length) {
      panel.appendChild(el('p', 'empty', 'Nothing yet on this page. Click an element to leave the first comment.'));
    } else {
      var listEl = el('ul', 'scroll');
      threads.forEach(function (t, i) {
        var li = el('li');
        var b = el('button');
        var num = el('span', 'num' + (t.status === 'resolved' ? ' done' : ''));
        if (t.status === 'resolved') num.appendChild(icon('check', 12));
        else num.textContent = String(i + 1);
        var wrap = el('span');
        var first = t.messages[0] || {};
        var label = t.anchor ? (t.anchor.text || t.anchor.tag || 'Element') : 'General feedback';
        wrap.appendChild(el('span', null, (first.body || '').slice(0, 90)));
        wrap.appendChild(el('span', 'who', label.slice(0, 46) + ' · ' +
                          new Date(t.createdAt).toLocaleDateString()));
        b.appendChild(num);
        b.appendChild(wrap);
        b.addEventListener('click', function () { closePanel(); showThread(t); });
        li.appendChild(b);
        listEl.appendChild(li);
      });
      panel.appendChild(listEl);
    }
    root.appendChild(panel);
  }

  pill.addEventListener('click', togglePanel);

  /* ---- dots --------------------------------------------------------------- */

  var dotsWrap = el('div');
  root.appendChild(dotsWrap);

  function rebuildPins() {
    pins = [];
    dotsWrap.textContent = '';
    threads.forEach(function (t, i) {
      if (!t.anchor) return;
      var target = resolveAnchor(t.anchor);
      if (!target) return; /* not on the page right now; a later pass may find it */
      var dot = el('button', 'dot' + (t.status === 'resolved' ? ' done' : ''));
      if (t.status === 'resolved') dot.appendChild(icon('check', 13));
      else dot.textContent = String(i + 1);
      dot.setAttribute('aria-label', 'Feedback thread');
      dot.addEventListener('click', function () { showThread(t); });
      pins.push({ thread: t, el: target, dot: dot });
      dotsWrap.appendChild(dot);
    });
    layoutDots();
  }

  /* True when the page no longer matches what the pins were built from: a
     framework re-render swapped a pinned element out, or an element a
     thread points at has appeared since the last pass. Either way the
     answer is to rebuild, and the check is cheap enough to run on every
     mutation burst. */
  function pinsAreStale() {
    for (var i = 0; i < pins.length; i++) {
      if (!document.contains(pins[i].el)) return true;
    }
    var anchored = 0;
    for (var j = 0; j < threads.length; j++) if (threads[j].anchor) anchored++;
    return pins.length < anchored;
  }

  function layoutDots() {
    for (var i = 0; i < pins.length; i++) {
      var p = pins[i];
      if (!document.contains(p.el)) { p.dot.style.display = 'none'; continue; }
      var r = p.el.getBoundingClientRect();
      var visible = r.bottom > -30 && r.top < window.innerHeight + 30 && (r.width || r.height);
      p.dot.style.display = visible ? '' : 'none';
      if (!visible) continue;
      var fx = p.thread.anchor.point ? p.thread.anchor.point.fx : 0.5;
      var fy = p.thread.anchor.point ? p.thread.anchor.point.fy : 0.5;
      p.dot.style.left = Math.round(r.left + r.width * Math.min(Math.max(fx, 0), 1) - 12) + 'px';
      p.dot.style.top = Math.round(r.top + r.height * Math.min(Math.max(fy, 0), 1) - 12) + 'px';
    }
  }

  function queueLayout() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(function () { rafPending = false; layoutDots(); });
  }

  window.addEventListener('scroll', queueLayout, { passive: true });
  window.addEventListener('resize', function () { rebuildPins(); });

  /* ---- pick mode ----------------------------------------------------------- */

  var capture = null, hl = null, hint = null;

  function enterPickMode() {
    if (mode === 'pick') return;
    mode = 'pick';
    closePopover();
    capture = el('div', 'capture');
    hl = el('div', 'hl');
    hl.appendChild(el('span', 'tag', ''));
    hint = el('div', 'hint', 'Click the thing you want to comment on · Esc to cancel');
    root.appendChild(hl);
    root.appendChild(capture);
    root.appendChild(hint);
    capture.addEventListener('mousemove', onPickMove);
    capture.addEventListener('click', onPickClick);
  }

  function exitPickMode() {
    mode = null;
    if (capture) capture.remove();
    if (hl) hl.remove();
    if (hint) hint.remove();
    capture = hl = hint = null;
  }

  /* The capture layer swallows the click so the page never acts on it; to
     see what is underneath we drop the host's pointer events for the
     lookup. elementFromPoint retargets shadow children to their host, so
     without this the answer would always be the host itself. */
  function elementAt(x, y) {
    host.style.pointerEvents = 'none';
    var found = document.elementFromPoint(x, y);
    host.style.pointerEvents = '';
    if (!found || found === document.documentElement || found === document.body) return null;
    return found;
  }

  function onPickMove(e) {
    var target = elementAt(e.clientX, e.clientY);
    if (!target) { hl.style.display = 'none'; return; }
    var r = target.getBoundingClientRect();
    hl.style.display = 'block';
    hl.style.left = r.left - 2 + 'px';
    hl.style.top = r.top - 2 + 'px';
    hl.style.width = r.width + 'px';
    hl.style.height = r.height + 'px';
    var label = target.tagName.toLowerCase() + (target.id ? '#' + target.id : '');
    var text = normText(target).slice(0, 40);
    hl.firstChild.textContent = text ? label + ' · ' + text : label;
  }

  function onPickClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = elementAt(e.clientX, e.clientY);
    if (!target) return;
    var anchor = buildAnchor(target, e.clientX, e.clientY);
    exitPickMode();
    showComposer(anchor, { x: e.clientX, y: e.clientY });
  }

  window.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (mode === 'pick') exitPickMode();
    else if (openPopover) closePopover();
    else if (panel) closePanel();
  });

  /* ---- popovers ------------------------------------------------------------ */

  function closePopover() {
    if (openPopover) { openPopover.remove(); openPopover = null; }
  }

  /* Called after the popover is in the DOM so its real height is known: a
     one-line composer and a twenty-reply thread need different room, and a
     fixed guess pushed tall threads off the bottom of short windows. */
  function placePopover(pop, at) {
    var h = pop.getBoundingClientRect().height;
    var w = pop.getBoundingClientRect().width;
    var x = Math.min(Math.max(at.x, 12), Math.max(12, window.innerWidth - w - 12));
    var below = at.y + 14;
    var y = below + h + 12 <= window.innerHeight
      ? below                                        /* fits under the click */
      : Math.max(12, window.innerHeight - h - 12);   /* otherwise sit off the bottom edge */
    pop.style.left = Math.round(x) + 'px';
    pop.style.top = Math.round(y) + 'px';
  }

  /* The composer: new thread, anchored or general. */
  function showComposer(anchor, at, draftBody) {
    closePopover();
    var pop = el('div', 'pop');
    openPopover = pop;

    pop.appendChild(el('h3', null, anchor ? 'Comment on this element' : 'General feedback'));
    pop.appendChild(el('p', 'ctx', anchor
      ? (anchor.text ? '“' + anchor.text.slice(0, 70) + '”' : anchor.tag.toLowerCase())
      : 'About this page or the design as a whole'));

    var ta = document.createElement('textarea');
    ta.maxLength = 4000;
    ta.placeholder = anchor ? 'What should change here?' : 'What should change?';
    if (draftBody) ta.value = draftBody;
    pop.appendChild(ta);

    var thumbs = el('div', 'thumbs');
    pop.appendChild(thumbs);
    var files = [];

    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.multiple = true;
    fileInput.style.display = 'none';
    pop.appendChild(fileInput);

    function addFiles(list) {
      for (var i = 0; i < list.length && files.length < 3; i++) {
        if (!/^image\//.test(list[i].type)) continue;
        (function (f) {
          files.push(f);
          var t = el('span', 't');
          var img = document.createElement('img');
          img.src = URL.createObjectURL(f);
          var x = el('button', 'x');
          x.appendChild(icon('close', 11));
          x.setAttribute('aria-label', 'Remove photo');
          x.addEventListener('click', function () {
            files.splice(files.indexOf(f), 1);
            URL.revokeObjectURL(img.src);
            t.remove();
          });
          t.appendChild(img);
          t.appendChild(x);
          thumbs.appendChild(t);
        })(list[i]);
      }
      if (list.length && files.length >= 3) toast('Up to 3 photos per comment');
    }

    fileInput.addEventListener('change', function () { addFiles(fileInput.files); fileInput.value = ''; });
    ta.addEventListener('paste', function (e) {
      if (e.clipboardData && e.clipboardData.files.length) { addFiles(e.clipboardData.files); e.preventDefault(); }
    });
    pop.addEventListener('dragover', function (e) { e.preventDefault(); });
    pop.addEventListener('drop', function (e) { e.preventDefault(); if (e.dataTransfer) addFiles(e.dataTransfer.files); });

    var row = el('div', 'row');
    var attach = el('button', 'attach');
    attach.appendChild(icon('camera', 14));
    attach.appendChild(el('span', null, 'Add photo'));
    attach.addEventListener('click', function () { fileInput.click(); });
    var grow = el('span', 'grow');
    var cancel = el('button', 'ghost', 'Cancel');
    var send = el('button', 'send', 'Send');
    row.appendChild(attach);
    row.appendChild(grow);
    row.appendChild(cancel);
    row.appendChild(send);
    pop.appendChild(row);

    cancel.addEventListener('click', closePopover);
    send.addEventListener('click', function () {
      var body = ta.value.trim();
      if (!body) { toast('Write a comment first'); return; }
      send.disabled = true;
      send.textContent = files.length ? 'Uploading…' : 'Sending…';

      var uploads = files.reduce(function (chain, f) {
        return chain.then(function (urls) {
          return uploadImage(f).then(function (u) { urls.push(u); return urls; });
        });
      }, Promise.resolve([]));

      uploads.then(function (urls) {
        send.textContent = 'Sending…';
        return api('/api/threads', {
          method: 'POST',
          body: {
            site: SITE, path: PAGE,
            author: { name: 'Client', id: myId },
            anchor: anchor, body: body, images: urls,
          },
        });
      }).then(function (json) {
        clearDraft();
        allThreads.push(json.thread);
        render();
        closePopover();
        toast('Sent, thank you');
      }).catch(function (err) {
        saveDraft(body, anchor);
        send.disabled = false;
        send.textContent = 'Send';
        toast((err.message || 'Could not send') + '. Your text is saved, try again', true);
      });
    });

    root.appendChild(pop);
    placePopover(pop, at);
    ta.focus();
  }

  /* The thread view: messages, replies, status. */
  function showThread(t) {
    closePopover();
    var pop = el('div', 'pop');
    openPopover = pop;

    var title = el('h3', null, t.anchor ? 'Comment' : 'General feedback');
    var badge = el('span', 'status ' + t.status);
    if (t.status === 'resolved') {
      badge.appendChild(el('span', null, 'Actioned'));
      badge.appendChild(icon('check', 11));
    } else {
      badge.textContent = 'Open';
    }
    title.appendChild(badge);
    pop.appendChild(title);
    pop.appendChild(el('p', 'ctx', t.anchor
      ? (t.anchor.text ? '“' + t.anchor.text.slice(0, 70) + '”' : (t.anchor.tag || '').toLowerCase())
      : 'About the page as a whole'));

    var target = t.anchor ? resolveAnchor(t.anchor) : null;
    if (t.anchor && target && anchorChanged(t.anchor, target)) {
      pop.appendChild(el('p', 'warn', 'This part of the page has changed since the comment was made.'));
    }

    var msgs = el('div', 'msgs scroll');
    t.messages.forEach(function (m) {
      var box = el('div', 'msg');
      var isOwner = m.role === 'owner';
      box.appendChild(el('p', 'by' + (isOwner ? ' owner' : ''),
        (isOwner ? 'Site owner' : 'Client') + ' · ' + new Date(m.at).toLocaleDateString()));
      box.appendChild(el('p', null, m.body));
      (m.images || []).forEach(function (u) {
        var img = document.createElement('img');
        img.src = u;
        img.alt = 'attached photo';
        img.addEventListener('click', function () { window.open(u, '_blank', 'noopener'); });
        box.appendChild(img);
      });
      msgs.appendChild(box);
    });
    pop.appendChild(msgs);

    var ta = document.createElement('textarea');
    ta.maxLength = 4000;
    ta.placeholder = 'Reply…';
    ta.style.minHeight = '48px';
    pop.appendChild(ta);

    var row = el('div', 'row');
    var grow = el('span', 'grow');
    var close = el('button', 'ghost', 'Close');
    var send = el('button', 'send', 'Reply');
    row.appendChild(grow);
    row.appendChild(close);
    row.appendChild(send);
    pop.appendChild(row);

    close.addEventListener('click', closePopover);
    send.addEventListener('click', function () {
      var body = ta.value.trim();
      if (!body) return;
      send.disabled = true;
      api('/api/thread?site=' + encodeURIComponent(SITE) + '&id=' + encodeURIComponent(t.id), {
        method: 'POST',
        body: { action: 'reply', body: body, author: { name: 'Client' } },
      }).then(function (json) {
        t.messages = json.thread.messages;
        showThread(t);
        toast('Reply sent');
      }).catch(function (err) {
        send.disabled = false;
        toast(err.message || 'Could not send reply', true);
      });
    });

    root.appendChild(pop);
    var at;
    if (target) {
      var r = target.getBoundingClientRect();
      at = { x: r.left, y: r.bottom };
    } else {
      at = { x: window.innerWidth / 2 - 170, y: window.innerHeight * 0.2 };
    }
    placePopover(pop, at);
  }

  /* ---- drafts: never lose typed text to a network failure ------------------- */

  function draftKey() { return 'review:draft:' + SITE + ':' + PAGE; }

  function saveDraft(body, anchor) { store(draftKey(), { body: body, anchor: anchor, at: Date.now() }); }
  function clearDraft() { try { localStorage.removeItem(draftKey()); } catch (e) {} }

  function offerDraft() {
    var d = store(draftKey());
    if (!d || !d.body) return;
    var t = el('button', 'toast', 'You have an unsent comment. Tap to restore');
    t.addEventListener('click', function () {
      t.remove();
      showComposer(d.anchor || null, { x: window.innerWidth / 2 - 170, y: window.innerHeight * 0.25 }, d.body);
    });
    root.appendChild(t);
    setTimeout(function () { t.remove(); }, 8000);
  }

  /* ---- data ------------------------------------------------------------------
     Threads for the whole site are fetched once and scoped to the current
     page in memory, so a route change in a single-page app costs nothing
     and works offline of the hub. */

  var lastFetch = 0;

  function selectPageThreads() {
    threads = allThreads.filter(function (t) { return t.path === PAGE; });
  }

  function render() {
    selectPageThreads();
    renderPill();
    rebuildPins();
  }

  function refresh(force) {
    if (!force && Date.now() - lastFetch < 20000) return Promise.resolve();
    return api('/api/threads?site=' + encodeURIComponent(SITE) + '&status=all')
      .then(function (json) {
        allThreads = json.threads || [];
        lastFetch = Date.now();
        render();
      });
  }

  /* ---- single-page apps -------------------------------------------------------
     Two things break an overlay like this in a framework app, and both are
     handled here rather than in each site's install.

     First, routes change without a document load, so the page a comment
     belongs to changes under us. History is patched to notice; routers all
     go through pushState or replaceState, and the browser's own back and
     forward fire popstate.

     Second, a re-render can replace the very element a pin points at, and
     lazily rendered content can bring in an element a thread was waiting
     for. A MutationObserver watches for both and rebuilds, debounced, and
     never while the client is mid-interaction. */

  var routeTimer = null;

  function onRouteChange() {
    /* Routers update the URL and the DOM in either order, so settle first. */
    clearTimeout(routeTimer);
    routeTimer = setTimeout(function () {
      var next = currentPage();
      if (next === PAGE) return;
      PAGE = next;
      if (mode === 'pick') exitPickMode();
      closePopover();
      closePanel();
      render();
      refresh();      /* pick up anything left on this route elsewhere */
      offerDraft();   /* a draft is keyed per page, so re-offer on arrival */
    }, 60);
  }

  try {
    ['pushState', 'replaceState'].forEach(function (name) {
      var original = history[name];
      if (typeof original !== 'function') return;
      history[name] = function () {
        var result = original.apply(this, arguments);
        onRouteChange();
        return result;
      };
    });
  } catch (e) { /* history locked down: popstate and hashchange still fire */ }

  window.addEventListener('popstate', onRouteChange);
  window.addEventListener('hashchange', onRouteChange);

  if (window.MutationObserver) {
    var domTimer = null;
    var observer = new MutationObserver(function () {
      clearTimeout(domTimer);
      domTimer = setTimeout(function () {
        /* Never rebuild under the client's hands: picking an element or
           reading a thread must not have its target yanked away. */
        if (mode === 'pick' || openPopover) return;
        if (pinsAreStale()) rebuildPins();
        else queueLayout();
      }, 250);
    });
    /* The overlay's own UI lives in a shadow root on documentElement, so
       observing body cannot see it and cannot feed itself. */
    var watchBody = function () {
      observer.observe(document.body, { childList: true, subtree: true });
    };
    if (document.body) watchBody();
    else document.addEventListener('DOMContentLoaded', watchBody);
  }

  /* ---- boot ------------------------------------------------------------------ */

  refresh(true)
    .then(offerDraft)
    .catch(function () {
      render();
      offerDraft();
      toast('Could not reach the feedback service. Comments will be saved locally', true);
    });
})();
