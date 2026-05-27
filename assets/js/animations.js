(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const observer = reduceMotion
    ? null
    : new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  function registerReveals() {
    const targets = document.querySelectorAll(".reveal:not(.is-visible):not([data-reveal-bound])");

    targets.forEach((target) => {
      if (reduceMotion || !observer) {
        target.classList.add("is-visible");
        return;
      }

      target.dataset.revealBound = "true";
      observer.observe(target);
    });
  }

  registerReveals();
  document.addEventListener("projects:rendered", registerReveals);
})();
