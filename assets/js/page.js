/* Page behaviour: two-step lead form, scroll reveals, glass-strip entry.
   Classic script so it also runs when the page is opened from disk.
   All motion respects prefers-reduced-motion. */
(function () {
  'use strict';

  var docEl = document.documentElement;
  docEl.classList.add('js');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Lead form, two steps ---------------------------------------------
     Step two is hidden here rather than in the markup, so without script
     the whole form renders and submits in one pass. */
  var form = document.getElementById('lead-form');
  if (form) {
    var step1 = form.querySelector('.lead-step--1');
    var step2 = form.querySelector('.lead-step--2');
    var next = form.querySelector('[data-step-next]');
    var back = form.querySelector('[data-step-back]');

    var onStepOne = function () { return step2 && step2.hidden; };

    var advance = function () {
      var budget = form.querySelector('#budget');
      if (budget && !budget.value) {
        budget.reportValidity();
        return;
      }
      step1.hidden = true;
      step2.hidden = false;
      var name = form.querySelector('#lead-name');
      if (name) name.focus();
    };

    if (step1 && step2 && next) {
      step2.hidden = true;
      next.addEventListener('click', advance);

      if (back) {
        back.addEventListener('click', function () {
          step2.hidden = true;
          step1.hidden = false;
          next.focus();
        });
      }
    }

    /* Enter inside a step-one field triggers implicit submission, because the
       form's only submit button is the one in step two. Left alone that hands
       the event straight to the preventDefault below, so the visitor gets
       neither the next step nor a message. Treat it as pressing Next. */
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (step1 && step2 && next && onStepOne()) advance();
      /* FORM IS STUBBED: no endpoint exists yet, so a step-two submit
         deliberately does nothing. This whole build is a proof of concept;
         see HANDOVER.md before wiring it up. */
    });
  }

  var auctionCta = document.querySelector('.auction-cta');
  if (auctionCta && form) {
    auctionCta.addEventListener('submit', function (e) {
      e.preventDefault();
      form.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
    });
  }

  /* ---- Fixed mobile CTA ---------------------------------------------------
     Visible the whole way down the page, hidden only while the hero
     capture form is on screen, since the bar points at that form. The
     auction CTA card is deliberately NOT watched: it routes to the form
     rather than being one, so the bar stays up over it. */
  var bar = document.getElementById('mobile-cta');
  if (bar && form && 'IntersectionObserver' in window) {
    var barIo = new IntersectionObserver(function (entries) {
      bar.classList.toggle('is-up', !entries[0].isIntersecting);
    }, { threshold: 0 });
    barIo.observe(form);

    /* ---- Expert availability, PROOF OF CONCEPT ---------------------------
       Demo for client review, 18 Aug 2026. The count is NOT a verified
       claim; it comes from data-experts-count on <body>, which stands in
       for a live presence feed.

       To make it real, replace readAvailability below with a call to the
       CRM or HR presence endpoint ("who is signed in right now"). Nothing
       else here needs to change. Contract: resolve to a non-negative
       integer, or null when availability is unknown.

         0        nobody signed in, the button asks for a callback
         1 or more  the count is shown and the button opens a conversation
         null     neither is asserted, the unquantified line stays

       ?experts=N in the URL overrides, so both states can be shown in a
       meeting without a code change. */
    var readAvailability = function () {
      var q = new URLSearchParams(location.search).get('experts');
      var raw = q !== null ? q : document.body.getAttribute('data-experts-count');
      if (raw === null || raw === '') return Promise.resolve(null);
      var n = parseInt(raw, 10);
      return Promise.resolve(isNaN(n) || n < 0 ? null : n);
    };

    var hint = bar.querySelector('[data-experts-hint]');
    var cta = bar.querySelector('[data-cta-label]');

    var applyAvailability = function (count) {
      if (count === null || !hint || !cta) return;
      if (count === 0) {
        bar.classList.add('is-offline');
        hint.textContent = 'Our team is offline right now';
        cta.textContent = 'Request a call back';
      } else {
        bar.classList.remove('is-offline');
        hint.innerHTML = '<strong>' + count + ' ' + (count === 1 ? 'expert' : 'experts') +
          '</strong> available right now';
        cta.textContent = 'Speak to a team member';
      }
    };

    readAvailability().then(applyAvailability);

    /* ---- POC ONLY. DELETE BEFORE LAUNCH, WITH data-poc ON <body>. --------
       Demo switch so the nobody-available state can be shown in a client
       meeting. It is gated on data-poc and wired only when that attribute
       is present, so live never binds this handler. Not a product control:
       it rewrites an availability claim, which no visitor may do.
       Tracked in HANDOVER.md and README.md. */
    if (document.body.getAttribute('data-poc') === 'true') {
      var pocToggle = bar.querySelector('.poc-toggle');
      if (pocToggle) {
        pocToggle.addEventListener('click', function () {
          var wasAvailable = pocToggle.getAttribute('aria-checked') === 'true';
          pocToggle.setAttribute('aria-checked', wasAvailable ? 'false' : 'true');
          if (wasAvailable) {
            applyAvailability(0);
          } else {
            readAvailability().then(function (count) {
              applyAvailability(count === null || count === 0 ? 1 : count);
            });
          }
        });
      }
    }
    /* ------------------------- end POC ONLY ---------------------------- */
  }

  /* ---- Award marquees -----------------------------------------------------
     Each track ships one set of badges. A seamless loop needs the content
     left after the shift to still cover the strip, so the number of copies
     depends on how wide the strip is, which CSS cannot know. Measure the set,
     clone it until it covers, and shift by exactly one set.

     Speed is held at the original 15px per second by deriving the duration
     from the set width, so a wider strip scrolls at the same pace rather
     than faster. */
  if (!reduced) {
    var PIXELS_PER_SECOND = 15;

    var fillMarquee = function (marquee, track, set, setWidth) {
      /* After shifting one set, the rest must still fill the strip, so the
         track needs one set for the shift plus enough to cover the width. */
      var copiesNeeded = Math.ceil(marquee.clientWidth / setWidth) + 1;
      var copiesPresent = Math.round(track.scrollWidth / setWidth);
      for (var i = copiesPresent; i < copiesNeeded; i++) {
        set.forEach(function (node) { track.appendChild(node.cloneNode(true)); });
      }
      return copiesNeeded > copiesPresent;
    };

    document.querySelectorAll('.marquee').forEach(function (marquee) {
      var track = marquee.querySelector('.marquee__track');
      if (!track || !track.children.length) return;

      var set = [].slice.call(track.children);
      var setWidth = track.scrollWidth;
      /* Badges are lazy images, so the set can measure at zero before they
         have laid out. Bail rather than divide by it. */
      if (!setWidth) return;

      fillMarquee(marquee, track, set, setWidth);
      track.style.setProperty('--marquee-shift', setWidth + 'px');
      track.style.setProperty('--marquee-duration', (setWidth / PIXELS_PER_SECOND) + 's');
      marquee.classList.add('is-looping');

      /* Widening the window can outrun the copies already in place. Only ever
         adds, so the running animation is never restarted needlessly. */
      var resizeTimer;
      window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          fillMarquee(marquee, track, set, setWidth);
        }, 200);
      });
    });
  }

  /* ---- Scroll reveals ----------------------------------------------------
     The auction photos get the glass entry: in from the right, blur to
     sharp, staggered. Everything else gets a quiet fade-up. Classes are
     added here at runtime so the page stays static without script. */
  if (reduced || !('IntersectionObserver' in window)) return;

  var FADE = [
    '.testimonials-head__intro', '.rating-rows', '.story-card',
    '.truth-head__copy', '.truth-visual',
    '.stats-visual', '.stats-copy',
    '.steps-head', '.step-card',
    '.auction-head', '.move', '.auction-cta',
    '.prestige-visual', '.prestige-copy',
    '.faq h2', '.faq-item',
    '.closer__wrap'
  ];
  var GLASS = ['.auction-photo'];

  var targets = [];
  FADE.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { el.classList.add('reveal'); targets.push(el); });
  });
  GLASS.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { el.classList.add('reveal-glass'); targets.push(el); });
  });

  /* Stagger siblings that reveal together: each element's delay counts its
     position among its revealing siblings. The glass photos cascade with a
     much longer step so they clearly enter one after another. */
  targets.forEach(function (el) {
    var i = 0, sib = el;
    while ((sib = sib.previousElementSibling)) {
      if (sib.classList.contains('reveal') || sib.classList.contains('reveal-glass')) i++;
    }
    var step = el.classList.contains('reveal-glass') ? 380 : 110;
    el.style.animationDelay = (i * step) + 'ms';
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (el) { io.observe(el); });
})();
