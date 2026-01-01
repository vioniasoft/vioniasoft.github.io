/* =========================================================
   main.js
   - 加载导航
   - 页面 Vue
   - 滚动动画（核心价值 + 卡片）
   ========================================================= */

/* =========================
   1. 加载导航 HTML
   ========================= */
fetch("assets/partials/nav.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("nav-container").innerHTML = html;
        initNav();
    });

/* =========================
   2. 页面 Vue
   ========================= */
const app = new Vue({
    el: "#app",

    data: {
        lang: window.defaultLang || "ko",
        t: {}
    },

    created() {
        this.updateLang(this.lang);
    },

    mounted() {
        this.initScrollAnimation();
    },

    methods: {
        updateLang(lang) {
            this.lang = lang;
            this.t = window.i18nMessages[lang];
        },

        /* =========================
           滚动进入动画（关键）
           ========================= */
        initScrollAnimation() {
            const header = document.querySelector(".value-header");
            const cards = document.querySelectorAll(".value-card");

            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (!entry.isIntersecting) return;

                        // ===== 核心价值标题 =====
                        if (entry.target.classList.contains("value-header")) {
                            entry.target.classList.add("is-visible");
                            observer.unobserve(entry.target);
                        }

                        // ===== 卡片：依次进入 =====
                        if (entry.target.classList.contains("value-card")) {
                            const index = [...cards].indexOf(entry.target);

                            setTimeout(() => {
                                entry.target.classList.add("is-visible");
                            }, index * 180); // 👈 控制节奏（越大越稳重）

                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.25
                }
            );

            // 监听标题
            if (header) observer.observe(header);

            // 监听卡片
            cards.forEach(card => observer.observe(card));
        }

    }
});

/* =========================
   3. 接收导航语言切换
   ========================= */
window.addEventListener("lang-change", e => {
    app.updateLang(e.detail);
});



/* =========================================================
   About 页面滚动进入动画（Intersection Observer）
   ========================================================= */
   document.addEventListener("DOMContentLoaded", () => {

    const aboutItems = document.querySelectorAll(".about-animate");
  
    if (!aboutItems.length) return;
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2
      }
    );
  
    aboutItems.forEach(el => observer.observe(el));
  });
  