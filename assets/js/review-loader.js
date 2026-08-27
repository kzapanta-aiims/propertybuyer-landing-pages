/* Review overlay loader.
 *
 * Always on the page, almost never doing anything: on a normal visit this
 * runs a gate check and returns. Only when the visitor arrives with
 * ?review=1 (or carries the cookie a previous ?review=1 visit set) does it
 * inject review.js, which holds the whole overlay. No network request is
 * made, and no DOM is touched, on an ungated visit.
 *
 * The gate survives in-site navigation via a cookie so the client can
 * move between pages without re-appending the query string. ?review=0
 * clears it.
 *
 * Installed by the client-review skill. The script tag carries the
 * config so this file itself is identical on every site:
 *
 *   <script defer src="../../assets/js/review-loader.js"
 *           data-review-site="<siteKey>"
 *           data-review-hub="https://feedback-hub-navy.vercel.app"></script>
 */
(function () {
  'use strict';

  var script = document.currentScript;
  if (!script) return;

  var site = script.getAttribute('data-review-site');
  var hub = script.getAttribute('data-review-hub');
  if (!site || !hub) return;

  /* ---- The gate -------------------------------------------------------- */

  var params = new URLSearchParams(window.location.search);
  var flag = params.get('review');

  if (flag === '0') {
    document.cookie = 'review=; path=/; max-age=0; SameSite=Lax';
    return;
  }
  if (flag === '1') {
    /* Two weeks: long enough for a review round, short enough to expire
       on its own if the client never turns it off. */
    document.cookie = 'review=1; path=/; max-age=1209600; SameSite=Lax';
  } else if (!/(^|;\s*)review=1(;|$)/.test(document.cookie)) {
    return; /* the normal visit: stop here, load nothing */
  }

  /* ---- Gated in: load the overlay -------------------------------------- */

  var s = document.createElement('script');
  s.src = script.src.replace(/review-loader\.js([?#].*)?$/, 'review.js');
  s.defer = true;
  s.setAttribute('data-review-site', site);
  s.setAttribute('data-review-hub', hub);
  document.head.appendChild(s);
})();
