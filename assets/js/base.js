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



