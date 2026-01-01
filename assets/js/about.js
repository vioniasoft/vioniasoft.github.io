/* =========================================================
   About 页面滚动动画
========================================================= */
// assets/js/about.js
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    items.forEach(el => observer.observe(el));
});
