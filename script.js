const progress = document.querySelector(".scroll-progress");
const revealItems = document.querySelectorAll("[data-reveal]");
const storyPanels = document.querySelectorAll(".story-panel");
const storyImages = document.querySelectorAll(".story-image");

const setProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

revealItems.forEach((item) => revealObserver.observe(item));

const storyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const index = entry.target.dataset.story;
    storyPanels.forEach((panel) => panel.classList.toggle("active", panel.dataset.story === index));
    storyImages.forEach((image) => image.classList.toggle("visible", image.dataset.storyImage === index));
  });
}, { threshold: 0.62 });

storyPanels.forEach((panel) => storyObserver.observe(panel));
window.addEventListener("scroll", setProgress, { passive: true });
window.addEventListener("resize", setProgress);
setProgress();
