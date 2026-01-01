

/* =========================================================
   nav.js · 稳定版
   - 移动端菜单
   - 语言切换
   - 当前页高亮（无 Vue 依赖）
========================================================= */

// assets/js/nav.js
/* =========================================================
   nav.js · 官网级最终完成态
========================================================= */

function initNav() {

    const navEl = document.getElementById("mainNav");
    let lastScroll = 0;
    let scrollTimer = null;

    const navApp = new Vue({
        el: "#navApp",
        data: {
            open: false,
            menuOpen: false,
            langOpen: false,
            lang: window.__APP__?.lang || "ko",
            t: window.__APP__?.t || {}
        },
        mounted() {
            this.$nextTick(() => {
                this.initIndicator();
            });
        },
        watch: {
            menuOpen(val) {
                document.body.classList.toggle("nav-locked", val);
            }
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen;
                this.langOpen = false;
            },
            go(url) {
                this.closeAll();
                setTimeout(() => location.href = url, 120);
            },
            switchLang(lang) {
                this.lang = lang;
                this.closeAll();
                window.dispatchEvent(new CustomEvent("lang-change", {
                    detail: lang
                }));
            },
            closeAll() {
                this.open = false;
                this.menuOpen = false;
                this.langOpen = false;
            },

            /* ===== 指示条 ===== */
            initIndicator() {
                const indicator = this.$refs.indicator;
                const items = this.$el.querySelectorAll(".nav-menu > li");
                if (!indicator || !items.length) return;

                const page = location.pathname.split("/").pop() || "index.html";
                const map = {
                    "index.html": 0,
                    "about.html": 1,
                    "services.html": 2,
                    "contact.html": 3
                };

                const active = items[map[page] ?? 0];
                active.classList.add("is-active");
                this.moveIndicator(active);

                items.forEach(li => {
                    li.addEventListener("mouseenter", () => {
                        this.moveIndicator(li);
                    });
                });

                this.$el.querySelector(".nav-menu")
                    .addEventListener("mouseleave", () => {
                        this.moveIndicator(active);
                    });
            },

            moveIndicator(target) {
                const indicator = this.$refs.indicator;
                if (!indicator) return;

                const r = target.getBoundingClientRect();
                const p = target.parentElement.getBoundingClientRect();

                indicator.style.left = r.left - p.left + "px";
                indicator.style.width = r.width + "px";
                indicator.classList.remove("hide");
            }
        }
    });

    /* =========================================================
       滚动行为控制（官网级）
    ========================================================= */

    window.addEventListener("scroll", () => {
        const current = window.scrollY;

        // 向下滚隐藏
        if (current > lastScroll && current > 120) {
            navEl.classList.add("nav-hidden");
        } else {
            navEl.classList.remove("nav-hidden");
        }

        // Hero 区域弱化光源
        navEl.classList.toggle("nav-dim", current > 80);

        // Indicator 滚动中隐藏
        navApp.$refs.indicator?.classList.add("hide");

        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            navApp.$refs.indicator?.classList.remove("hide");
        }, 140);

        lastScroll = current;
    });

    /* 点击空白关闭 */
    document.addEventListener("click", e => {
        if (!e.target.closest(".nav")) {
            navApp.closeAll();
        }
    });
}
