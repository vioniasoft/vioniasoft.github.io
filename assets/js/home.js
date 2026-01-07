/* =========================================================
   Home 页面专属 JS
   - 核心价值标题进入动画
   - 核心价值卡片按顺序渐入（丝滑，不卡顿）
   - 支持动态卡片数量
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // 获取标题和所有核心价值卡片
    const header = document.querySelector(".value-header");
    const cards = document.querySelectorAll(".value-card");

    // 如果页面没有标题或卡片，直接返回
    if (!header && !cards.length) return;

    // 创建 IntersectionObserver，观察元素进入视口
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            // 如果元素未进入视口，则跳过
            if (!entry.isIntersecting) return;

            // =======================================
            // 标题进入动画
            // =======================================
            if (entry.target.classList.contains("value-header")) {
                entry.target.classList.add("is-visible"); // 添加触发动画类
                observer.unobserve(entry.target); // 动画触发后停止观察
            }

            // =======================================
            // 核心价值卡片顺序渐入动画
            // =======================================
            if (entry.target.classList.contains("value-card")) {
                const index = [...cards].indexOf(entry.target);

                // ✅ 动画延迟设置较短，使入场更丝滑
                // 原来 180ms/张 → 改为 80ms/张，视觉连续流畅
                setTimeout(() => {
                    entry.target.classList.add("is-visible");
                }, index * 80); 

                // 不立即 unobserve，等动画延迟触发后再取消观察，避免卡顿
                setTimeout(() => {
                    observer.unobserve(entry.target);
                }, index * 80 + 500); // 动画时长 500ms 后取消观察
            }

        });
    }, { threshold: 0.25 }); // 元素进入视口 25% 时触发

    // 观察标题
    if (header) observer.observe(header);

    // 观察所有核心价值卡片
    cards.forEach(card => observer.observe(card));
});
