// assets/js/nav.js

// =========================================================
// nav.js
// 功能：
// 1️⃣ 固定菜单向下滑动隐藏，向上滑动显示
// 2️⃣ 桌面菜单指示条动画
// 3️⃣ 移动端菜单切换
// 4️⃣ 语言切换读取 localStorage
// =========================================================

/* =========================================================
   nav.js
========================================================= */

function initNav() {
  const navEl = document.getElementById("mainNav");
  if (!navEl) return;

  let lastScroll = 0;
  let scrollTimer = null;

  const navApp = new Vue({
    el: "#navApp",
    data() {
      const lang = sessionStorage.getItem("lang") || "ko";
      return {
        open: false,
        menuOpen: false,
        langOpen: false,
        lang,
        t: window.i18nMessages[lang]
      };
    },
    mounted() {
      this.$nextTick(this.initIndicator);
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
        sessionStorage.setItem("lang", lang);
        location.reload();
      },
      closeAll() {
        this.open = false;
        this.menuOpen = false;
        this.langOpen = false;
      },
      initIndicator() {
        const indicator = this.$refs.indicator;
        const items = this.$el.querySelectorAll(".nav-menu > li:not(.mobile-lang):not(.mobile-lang-item)");
        if (!indicator || !items.length) return;

        const page = location.pathname.split("/").pop() || "index.html";
        const map = {
          "index.html": 0,
          "about.html": 1,
          "services.html": 2,
          "contact.html": 3
        };
        const idx = map[page] ?? 0;
        const active = items[idx];
        if (!active) return;

        active.classList.add("is-active");
        this.moveIndicator(active);

        items.forEach(li => {
          li.addEventListener("mouseenter", () => this.moveIndicator(li));
        });
        this.$el.querySelector(".nav-menu")
          .addEventListener("mouseleave", () => this.moveIndicator(active));
      },
      moveIndicator(target) {
        const indicator = this.$refs.indicator;
        if (!indicator || !target) return;
        const r = target.getBoundingClientRect();
        const p = target.parentElement.getBoundingClientRect();
        indicator.style.left = r.left - p.left + "px";
        indicator.style.width = r.width + "px";
        indicator.classList.remove("hide");
      }
    }
  });

  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    navEl.classList.toggle("nav-hidden", current > lastScroll && current > 120);
    navEl.classList.toggle("nav-dim", current > 80);

    if (navApp.$refs.indicator) {
      navApp.$refs.indicator.classList.add("hide");
    }
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      if (navApp.$refs.indicator) {
        navApp.$refs.indicator.classList.remove("hide");
      }
    }, 140);

    lastScroll = current;
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".nav")) {
      navApp.closeAll();
    }
  });
}