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

    if (step1 && step2 && next) {
      step2.hidden = true;

      next.addEventListener('click', function () {
        var budget = form.querySelector('#budget');
        if (budget && !budget.value) {
          budget.reportValidity();
          return;
        }
        step1.hidden = true;
        step2.hidden = false;
        var name = form.querySelector('#lead-name');
        if (name) name.focus();
      });

      if (back) {
        back.addEventListener('click', function () {
          step2.hidden = true;
          step1.hidden = false;
          next.focus();
        });
      }
    }

    /* FORM IS STUBBED: no endpoint exists yet. */
    form.addEventListener('submit', function (e) {
      e.preventDefault();
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
     Slides up when neither capture form is on screen. The hint stays
     unquantified until a real availability number exists: set
     data-experts-count on <body> and it becomes "N experts available
     right now". Never hardcode that count here; it is a claim. */
  var bar = document.getElementById('mobile-cta');
  if (bar && 'IntersectionObserver' in window) {
    var expertsCount = document.body.getAttribute('data-experts-count');
    if (expertsCount) {
      var hint = bar.querySelector('[data-experts-hint]');
      if (hint) hint.textContent = expertsCount + ' experts available right now';
    }
    var formsInView = new Map();
    var watched = [form, auctionCta].filter(Boolean);
    if (watched.length) {
      var barIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { formsInView.set(e.target, e.isIntersecting); });
        var anyVisible = false;
        formsInView.forEach(function (v) { if (v) anyVisible = true; });
        bar.classList.toggle('is-up', !anyVisible);
      }, { threshold: 0 });
      watched.forEach(function (f) { formsInView.set(f, true); barIo.observe(f); });
    }
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
