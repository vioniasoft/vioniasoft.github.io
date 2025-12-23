/* =========================================================
Language Data（原样保留）
========================================================= */
const T = {
  ko: {
    nav: ["홈", "회사소개", "서비스", "문의"],
    hero: "기업의 디지털 성장을 함께합니다",
    desc: "비오니아소프트는 기업의 실제 운영 환경에 맞는 IT·소프트웨어 솔루션을 설계하고 구축하는 기술 스튜디오입니다.",
    sub: "단기 개발이 아닌, 안정적인 운영과 확장을 전제로 한 시스템을 만듭니다.",
    explore: "서비스 알아보기",
    aboutTitle: "회사 소개",
    aboutDesc:
      "비오니아소프트는 기술을 단순한 개발 작업이 아닌, 비즈니스 전략의 일부로 접근합니다.",
    aboutCards: [
      ["비즈니스 중심 사고", "기술보다 비즈니스 흐름을 우선적으로 고려합니다."],
      ["안정성과 확장성", "장기 운영을 전제로 한 구조를 설계합니다."],
      ["명확한 커뮤니케이션", "과정과 결과를 투명하게 공유합니다."],
      ["지속적인 파트너십", "프로젝트 이후에도 함께 개선해 나갑니다."]
    ],
    servicesTitle: "서비스",
    services: [
      ["💻 맞춤형 소프트웨어 개발", "업무 프로세스에 맞춘 웹 시스템"],
      ["📊 IT 컨설팅", "기술 전략 수립"],
      ["☁️ 클라우드 솔루션", "AWS, Azure 기반"],
      ["🚀 프로젝트 관리", "기획부터 유지보수까지"]
    ],
    contactTitle: "문의하기",
    contactDesc: "프로젝트 제안, 기술 상담 등 언제든지 연락 주세요."
  },
  en: {
    nav: ["Home", "About", "Services", "Contact"],
    hero: "Supporting Sustainable Digital Growth",
    desc: "VioniaSoft builds software for real business operations.",
    sub: "We focus on long-term stability and scalability.",
    explore: "View Services",
    aboutTitle: "About Us",
    aboutDesc: "Technology as part of business strategy.",
    aboutCards: [
      ["Business-Oriented", "Aligned with operations"],
      ["Scalable", "Built for growth"],
      ["Clear", "Transparent communication"],
      ["Partner", "Long-term collaboration"]
    ],
    servicesTitle: "Services",
    services: [
      ["💻 Software Development", "Custom systems"],
      ["📊 IT Consulting", "Architecture & strategy"],
      ["☁️ Cloud", "AWS / Azure"],
      ["🚀 PM", "End-to-end delivery"]
    ],
    contactTitle: "Contact",
    contactDesc: "Feel free to reach out anytime."
  },
  zh: {
    nav: ["首页", "关于我们", "服务", "联系"],
    hero: "助力企业实现数字化成长",
    desc: "VioniaSoft 专注企业级 IT 解决方案。",
    sub: "关注长期稳定与扩展。",
    explore: "查看服务",
    aboutTitle: "关于我们",
    aboutDesc: "技术是战略的一部分。",
    aboutCards: [
      ["以业务为核心", "服务真实业务"],
      ["稳定扩展", "长期设计"],
      ["透明沟通", "清晰流程"],
      ["长期合作", "持续支持"]
    ],
    servicesTitle: "服务",
    services: [
      ["💻 软件开发", "定制系统"],
      ["📊 IT 咨询", "架构分析"],
      ["☁️ 云服务", "AWS / Azure"],
      ["🚀 项目管理", "全流程"]
    ],
    contactTitle: "联系我们",
    contactDesc: "欢迎联系合作。"
  }
};

const $ = id => document.getElementById(id);

/* =========================================================
Language Switch
========================================================= */
function setLang(lang) {
  const t = T[lang];
  if (!t) return;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-nav]").forEach((el, i) => {
    el.textContent = t.nav[i] || "";
  });

  if ($("heroTitle")) {
    $("heroTitle").textContent = t.hero;
    $("heroDesc").textContent = t.desc;
    $("heroSub") && ($("heroSub").textContent = t.sub);
    $("heroBtn") && ($("heroBtn").textContent = t.explore);
  }

  if ($("aboutTitle")) {
    $("aboutTitle").textContent = t.aboutTitle;
    $("aboutDesc").textContent = t.aboutDesc;
    const wrap = $("aboutCards");
    wrap &&
      (wrap.innerHTML = t.aboutCards
        .map(
          c => `<div class="card"><h3>${c[0]}</h3><p>${c[1]}</p></div>`
        )
        .join(""));
    observeCards();
  }

  if ($("servicesTitle")) {
    $("servicesTitle").textContent = t.servicesTitle;
    const wrap = $("servicesCards");
    wrap &&
      (wrap.innerHTML = t.services
        .map(
          s => `<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div>`
        )
        .join(""));
    observeCards();
  }

  if ($("contactTitle")) {
    $("contactTitle").textContent = t.contactTitle;
    $("contactDesc").textContent = t.contactDesc;
  }
}

/* =========================================================
PC Language Menu
========================================================= */
function toggleLang() {
  const menu = $("langMenu");
  menu && (menu.style.display = menu.style.display === "block" ? "none" : "block");
}

/* =========================================================
Mobile Menu
========================================================= */
function toggleMobileMenu() {
  $("navMobile")?.classList.toggle("open");
}

/* 点击页面任意处关闭菜单（新增） */
document.addEventListener("click", e => {
  const nav = $("navMobile");
  if (!nav) return;
  if (!nav.contains(e.target) && nav.classList.contains("open")) {
    nav.classList.remove("open");
  }
});

/* =========================================================
Contact → mailto 发邮件（新增）
========================================================= */
document.addEventListener("submit", e => {
  if (e.target.id !== "contactForm") return;
  e.preventDefault();

  const [name, email] = e.target.querySelectorAll("input");
  const msg = e.target.querySelector("textarea").value;

  const body =
    `Name: ${name.value}\n` +
    `Email: ${email.value}\n\n` +
    msg;

  location.href =
    `mailto:info@vioniasoft.com?subject=Website Inquiry&body=` +
    encodeURIComponent(body);
});

/* =========================================================
Card Animation
========================================================= */
let observer;
function observeCards() {
  observer && observer.disconnect();
  observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        observer.unobserve(e.target);
      }
    });
  });
  document.querySelectorAll(".card").forEach(c => observer.observe(c));
}

/* =========================================================
Init + Inject NAV
========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  fetch("/assets/partials/nav.html")
    .then(r => r.text())
    .then(html => {
      $("siteNav").innerHTML = html;
      setLang(localStorage.getItem("lang") || "ko");
    });
});
