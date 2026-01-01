/* =========================================================
   Hero · 逐字渐显（防路由重复 / 防空节点）
========================================================= */

function initHero() {
    const titleEl = document.querySelector(".hero-title");
    if (!titleEl) return; // ⛔ 路由未加载完，直接退出

    const text = titleEl.dataset.text || titleEl.textContent;
    if (!text || typeof text !== "string") return; // ⛔ 防 undefined

    // 防止二次执行（非常关键）
    if (titleEl.classList.contains("animated")) return;
    titleEl.classList.add("animated");

    titleEl.textContent = "";

    [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.className = "char";
        span.style.animationDelay = `${i * 0.04}s`;
        span.textContent = char === " " ? "\u00A0" : char;
        titleEl.appendChild(span);
    });
}
