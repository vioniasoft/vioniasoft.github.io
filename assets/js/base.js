/* =========================================================
   Base JS（全站）
   - 注入导航
   - Vue 实例
   - 语言切换广播
   ========================================================= */


/* =========================================================
   base.js
   - 全站唯一 JS
   - 负责：导航加载 / Vue / i18n
   ========================================================= */

// /* =========================
//    1. 加载导航（所有页面通用）
//    ========================= */
// fetch("assets/partials/nav.html")
//     .then(res => res.text())
//     .then(html => {
//         const nav = document.getElementById("nav-container");
//         if (nav) {
//             nav.innerHTML = html;
//             if (typeof initNav === "function") initNav();
//         }
//     })
//     .catch(() => {
//         console.warn("nav.html 加载失败");
//     });

// /* =========================
//    2. Vue 主实例（唯一）
//    ========================= */
// window.__APP__ = new Vue({
//     el: "#app",

//     data: {
//         lang: window.defaultLang || "ko",
//         t: {}
//     },

//     created() {
//         if (window.i18nMessages && this.lang in window.i18nMessages) {
//             this.t = window.i18nMessages[this.lang];
//         }
//     },

//     methods: {
//         updateLang(lang) {
//             if (window.i18nMessages && lang in window.i18nMessages) {
//                 this.lang = lang;
//                 this.t = window.i18nMessages[lang];
//             }
//         }
//     }
// });

// /* =========================
//    3. 接收语言切换事件
//    ========================= */
// window.addEventListener("lang-change", e => {
//     if (window.__APP__) {
//         window.__APP__.updateLang(e.detail);
//     }
// });



// /* =========================================================
//    Nav 滚动状态
//    ========================================================= */
// window.addEventListener("scroll", () => {
//     const nav = document.querySelector(".nav");
//     if (!nav) return;

//     if (window.scrollY > 20) {
//         nav.classList.add("nav-scrolled");
//     } else {
//         nav.classList.remove("nav-scrolled");
//     }
// });

// /* =========================================================
//    当前页面菜单高亮
//    ========================================================= */
// document.addEventListener("DOMContentLoaded", () => {
//     const path = location.pathname.split("/").pop();
//     document.querySelectorAll(".nav-menu li").forEach(li => {
//         const target = li.dataset.target;
//         if (target && path.includes(target)) {
//             li.classList.add("active");
//         }
//     });
// });














/* =========================================================
   base.js
   - 全站唯一入口
   - 负责：nav 加载 / Vue / 语言同步
========================================================= */

/* =========================
   1. 加载导航
========================= */
fetch("assets/partials/nav.html")
  .then(res => res.text())
  .then(html => {
    const nav = document.getElementById("nav-container");
    if (nav) {
      nav.innerHTML = html;
      if (typeof initNav === "function") initNav();
    }
  });
 
/* =========================
   2. Vue 主实例（语言从 localStorage 读取）
========================= */
window.__APP__ = new Vue({
  el: "#app",

  data() {
    return {
      lang: localStorage.getItem("lang") || "ko",
      t: {}
    }; 
  },

  created() {
    this.t = window.i18nMessages[this.lang];
  },

  methods: {
    /* ===== 切换语言（写入 localStorage + 刷新）===== */
    setLang(lang) {
      if (!window.i18nMessages[lang]) return;
      localStorage.setItem("lang", lang);
      location.reload(); // ⚠️ 强制刷新，保证 nav / page 同步
    }
  }
});


/* =========================
   3. 页面滚动 nav 状态
========================= */
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  nav.classList.toggle("nav-scrolled", window.scrollY > 20);
});

/* =========================
   4. 当前页面菜单高亮
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop();
  document.querySelectorAll(".nav-menu li").forEach(li => {
    if (path && li.dataset.target && path.includes(li.dataset.target)) {
      li.classList.add("active");
    }
  });
});



