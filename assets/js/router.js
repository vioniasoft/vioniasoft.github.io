/* =========================================================
   router.js · 全站无刷新切换（稳定版 / SEO 安全）
========================================================= */

function initRouter() {

    const main = document.querySelector("main.page");
    if (!main) return;

    /* -------------------------------------------------------
       拦截站内 .html 链接（只绑定一次）
    ------------------------------------------------------- */
    if (!window.__routerBound) {
        document.addEventListener("click", e => {
            const link = e.target.closest("a");
            if (!link) return;

            const href = link.getAttribute("href");
            if (!href) return;

            // 只处理站内 html
            if (
                href.startsWith("http") ||
                href.startsWith("mailto:") ||
                href.startsWith("#") ||
                !href.endsWith(".html")
            ) return;

            e.preventDefault();
            navigate(href);
        });

        window.__routerBound = true;
    }

    /* -------------------------------------------------------
       浏览器前进 / 后退
    ------------------------------------------------------- */
    window.onpopstate = () => {
        const page = location.pathname.split("/").pop() || "index.html";
        loadPage(page, false);
    };

    /* -------------------------------------------------------
       跳转
    ------------------------------------------------------- */
    function navigate(url) {
        if (url === location.pathname.split("/").pop()) return;
        loadPage(url, true);
    }

    /* -------------------------------------------------------
       核心加载逻辑
    ------------------------------------------------------- */
    async function loadPage(url, push = true) {

        main.classList.add("fade-out");

        try {
            const res = await fetch(url, { cache: "no-store" });
            const html = await res.text();

            const doc = new DOMParser().parseFromString(html, "text/html");
            const newMain = doc.querySelector("main.page");

            if (!newMain) {
                location.href = url;
                return;
            }

            setTimeout(() => {

                /* ===== 替换内容 ===== */
                main.innerHTML = newMain.innerHTML;
                main.classList.remove("fade-out");

                /* ===== 更新 URL ===== */
                if (push) {
                    history.pushState(null, "", url);
                }

                /* ===== 回到顶部 ===== */
                window.scrollTo(0, 0);

                /* ===== 延迟初始化（防 DOM 未就绪）===== */
                requestAnimationFrame(() => {
                    initNav?.();
                    initHero?.();
                });

            }, 260);

        } catch (err) {
            console.error("Router load error:", err);
            location.href = url;
        }
    }
}
