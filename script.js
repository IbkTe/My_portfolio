// Reveal sections as they scroll into view.
(() => {
  const targets = document.querySelectorAll('.reveal');
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const show = (el) => el.classList.add('is-visible');

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(show);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      show(entry.target);
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  targets.forEach((el) => observer.observe(el));
})();
