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

/* =========================================================
   base.js
========================================================= */

window.switchLang = function(lang) {
  sessionStorage.setItem("lang", lang);
  location.reload();
};

const navContainer = document.getElementById("nav-container");
if (navContainer) {
  fetch("assets/partials/nav.html")
    .then(res => res.text())
    .then(html => {
      navContainer.innerHTML = html;
      initNav();
    });
}

window.__APP__ = new Vue({
  el: "#app",
  data() {
    const lang = sessionStorage.getItem("lang") || "ko";
    return {
      lang,
      t: window.i18nMessages[lang] || {}
    };
  },
  created() {
    this.setHtmlLang(this.lang);
  },
  methods: {
    setHtmlLang(lang) {
      const html = document.getElementById("htmlRoot");
      if (!html) return;
      const supportedLangs = ["ko", "en", "zh", "fr"];
      html.setAttribute("lang", supportedLangs.includes(lang) ? lang : "ko");
    }
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
});