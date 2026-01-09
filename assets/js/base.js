/* =========================================================
   base.js
   - 全站唯一入口
   - 负责：
     1. 异步加载导航（nav.html）
     2. Vue 根实例初始化
     3. 多语言管理（i18n）
     4. 页面滚动状态处理
     5. 当前页面菜单高亮
     6. HTML lang 属性动态更新（SEO）
========================================================= */

/* =========================
   1. 异步加载导航
========================= */
fetch("assets/partials/nav.html")
  .then(res => res.text())
  .then(html => {
    const navContainer = document.getElementById("nav-container");
    if (navContainer) {
      navContainer.innerHTML = html;
      // 如果 nav.js 定义了 initNav 函数，则初始化导航交互
      if (typeof initNav === "function") initNav();
    }
  })
  .catch(err => {
    console.error("导航加载失败:", err);
  });


/* =========================
   2. Vue 根实例
   - lang 从 localStorage 读取
   - t: 当前语言翻译内容
========================= */
window.__APP__ = new Vue({
  el: "#app",

  data() {
    return {
      lang: localStorage.getItem("lang") || "ko", // 默认韩语
      t: {} // 页面文案对象
    };
  },

  created() {
    // 初始化页面文案
    this.t = window.i18nMessages[this.lang] || {};
    // 初始化 HTML lang 属性，提升 SEO
    this.setHtmlLang(this.lang);
  },

  watch: {
    // 监听 lang 变化，自动更新页面文案和 HTML lang
    lang(newLang) {
      if (!window.i18nMessages[newLang]) return;
      this.t = window.i18nMessages[newLang];
      this.setHtmlLang(newLang);
    }
  },

  methods: {
    /* ===== 切换语言 =====
       1. 更新 localStorage
       2. 刷新页面以保证 nav 和页面同步
    */
    setLang(lang) {
      if (!window.i18nMessages[lang]) return;
      localStorage.setItem("lang", lang);
      location.reload();
    },

    /* ===== 更新 HTML lang 属性 =====
       1. SEO 优化：搜索引擎抓取正确语言
       2. lang 支持 "ko", "en", "zh", "fr"
    */
    setHtmlLang(lang) {
      const html = document.getElementById("htmlRoot");
      if (!html) return;
      const supportedLangs = ["ko", "en", "zh", "fr"];
      if (supportedLangs.includes(lang)) {
        html.setAttribute("lang", lang);
      } else {
        html.setAttribute("lang", "ko"); // 默认韩语
      }
    }
  }
});


/* =========================
   3. 页面滚动状态 nav
   - 滚动超过 20px 给 nav 添加 nav-scrolled 类
   - 用于改变导航条背景 / 阴影 / 粘性效果
========================= */
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  nav.classList.toggle("nav-scrolled", window.scrollY > 20);
});


/* =========================
   4. 当前页面菜单高亮
   - 根据 URL 匹配 nav-menu li 的 dataset.target
   - 为当前页面添加 active 类
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop();
  document.querySelectorAll(".nav-menu li").forEach(li => {
    if (path && li.dataset.target && path.includes(li.dataset.target)) {
      li.classList.add("active");
    }
  });
});
