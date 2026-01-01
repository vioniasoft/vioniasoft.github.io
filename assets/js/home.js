/* =========================================================
   Home 页面专属 JS
   - 核心价值标题进入
   - 卡片按顺序渐入（互不干扰）
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".value-header");
    const cards = document.querySelectorAll(".value-card");

    if (!header && !cards.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            if (entry.target.classList.contains("value-header")) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }

            if (entry.target.classList.contains("value-card")) {
                const index = [...cards].indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add("is-visible");
                }, index * 180);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    if (header) observer.observe(header);
    cards.forEach(card => observer.observe(card));
});
