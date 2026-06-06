// assets/js/nav.js

// =========================================================
// nav.js
// 功能：
// 1️⃣ 固定菜单向下滑动隐藏，向上滑动显示
// 2️⃣ 桌面菜单指示条动画
// 3️⃣ 移动端菜单切换
// 4️⃣ 语言切换读取 localStorage
// =========================================================

function initNav() {
  // 获取菜单元素
  const navEl = document.getElementById("mainNav");
  if (!navEl) return;

  let lastScroll = 0;
  let scrollTimer = null;

  const navApp = new Vue({
    el: "#navApp",
    data() {
      const lang = localStorage.getItem("lang") || "ko";
      return {
        open: false,      // 移动端菜单整体开关
        menuOpen: false,  // 主菜单开关
        langOpen: false,  // 语言菜单开关
        lang,
        t: window.i18nMessages[lang] // 文案
      };
    },
    mounted() {
      this.$nextTick(this.initIndicator);
    },
    watch: {
      menuOpen(val) {
        // 菜单打开时锁定 body 滚动
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
        localStorage.setItem("lang", lang);
        location.reload();
      },
      closeAll() {
        this.open = false;
        this.menuOpen = false;
        this.langOpen = false;
      },
      initIndicator() {
        const indicator = this.$refs.indicator;
        const items = this.$el.querySelectorAll(".nav-menu > li");
        if (!indicator || !items.length) return;

        // 当前页面高亮菜单
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

        // 鼠标悬停移动指示条
        items.forEach(li => {
          li.addEventListener("mouseenter", () => this.moveIndicator(li));
        });

        // 鼠标离开恢复当前页指示条
        this.$el.querySelector(".nav-menu")
          .addEventListener("mouseleave", () => this.moveIndicator(active));
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

  // 滚动控制菜单显示/隐藏
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    // 向下滚动并超过 120px 隐藏
    navEl.classList.toggle("nav-hidden", current > lastScroll && current > 120);
    // 滚动超过 80px 轻微透明
    navEl.classList.toggle("nav-dim", current > 80);

    // 隐藏指示条短暂消失
    navApp.$refs.indicator?.classList.add("hide");
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      navApp.$refs.indicator?.classList.remove("hide");
    }, 140);

    lastScroll = current;
  });

  // 点击菜单外区域关闭所有菜单
  document.addEventListener("click", e => {
    if (!e.target.closest(".nav")) {
      navApp.closeAll();
    }
  });
}





