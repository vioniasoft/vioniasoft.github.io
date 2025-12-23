/* ================= Language Data ================= */
const T = {
  ko: {
    nav: ["홈", "회사소개", "서비스", "문의"],
    hero: "기업의 디지털 성장을 함께합니다",
    desc: "비오니아소프트는 기업의 실제 운영 환경에 맞는 IT·소프트웨어 솔루션을 설계하고 구축하는 기술 스튜디오입니다.",
    sub: "단기 개발이 아닌, 안정적인 운영과 확장을 전제로 한 시스템을 만듭니다.",
    explore: "서비스 알아보기",
    aboutTitle: "회사 소개",
    aboutDesc: "비오니아소프트는 기술을 비즈니스 전략의 일부로 접근합니다.",
    aboutCards: [
      ["비즈니스 중심 사고", "기술보다 비즈니스 흐름을 우선"],
      ["안정성과 확장성", "장기 운영 구조"],
      ["명확한 커뮤니케이션", "투명한 과정 공유"],
      ["지속적인 파트너십", "프로젝트 이후도 함께"]
    ],
    servicesTitle: "서비스",
    services: [
      ["💻 맞춤형 소프트웨어 개발", "웹 시스템 및 플랫폼"],
      ["📊 IT 컨설팅", "구조 분석 및 전략"],
      ["☁️ 클라우드 솔루션", "AWS / Azure"],
      ["🚀 프로젝트 관리", "기획부터 운영까지"]
    ],
    contactTitle: "문의하기",
    contactDesc: "언제든지 편하게 연락 주세요."
  },

  en: {
    nav: ["Home", "About", "Services", "Contact"],
    hero: "Supporting Sustainable Digital Growth",
    desc: "VioniaSoft builds scalable IT solutions.",
    sub: "Stability over short-term development.",
    explore: "View Services",
    aboutTitle: "About Us",
    aboutDesc: "Technology as part of business strategy.",
    aboutCards: [
      ["Business-Oriented", "Aligned with operations"],
      ["Stable & Scalable", "Long-term growth"],
      ["Clear Communication", "Transparent delivery"],
      ["Long-Term Partner", "Beyond launch"]
    ],
    servicesTitle: "Services",
    services: [
      ["💻 Software Development", "Custom systems"],
      ["📊 IT Consulting", "Architecture & strategy"],
      ["☁️ Cloud Solutions", "AWS / Azure"],
      ["🚀 Project Management", "End-to-end"]
    ],
    contactTitle: "Contact",
    contactDesc: "Reach out anytime."
  },

  zh: {
    nav: ["首页", "关于我们", "服务", "联系"],
    hero: "助力企业数字化成长",
    desc: "专注真实业务场景的 IT 解决方案。",
    sub: "注重长期稳定与扩展。",
    explore: "查看服务",
    aboutTitle: "关于我们",
    aboutDesc: "技术是战略的一部分。",
    aboutCards: [
      ["业务导向", "服务真实流程"],
      ["稳定扩展", "长期设计"],
      ["透明沟通", "清晰交付"],
      ["长期合作", "持续支持"]
    ],
    servicesTitle: "服务",
    services: [
      ["💻 定制开发", "系统平台"],
      ["📊 IT 咨询", "技术规划"],
      ["☁️ 云方案", "AWS / Azure"],
      ["🚀 项目管理", "全流程"]
    ],
    contactTitle: "联系我们",
    contactDesc: "欢迎联系。"
  },

  fr: {
    nav: ["Accueil", "À propos", "Services", "Contact"],
    hero: "Croissance numérique durable",
    desc: "Solutions IT adaptées aux entreprises.",
    sub: "Stabilité et évolutivité.",
    explore: "Voir les services",
    aboutTitle: "À propos",
    aboutDesc: "La technologie comme stratégie.",
    aboutCards: [
      ["Vision métier", "Flux réels"],
      ["Stable", "Long terme"],
      ["Communication", "Transparente"],
      ["Partenariat", "Durable"]
    ],
    servicesTitle: "Services",
    services: [
      ["💻 Développement", "Sur mesure"],
      ["📊 Conseil IT", "Stratégie"],
      ["☁️ Cloud", "AWS / Azure"],
      ["🚀 Gestion", "De bout en bout"]
    ],
    contactTitle: "Contact",
    contactDesc: "Contactez-nous."
  }
};

/* ================= Helpers ================= */
const $ = id => document.getElementById(id);

/* ================= Language Switch ================= */
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
    if ($("heroSub")) $("heroSub").textContent = t.sub;
    if ($("heroBtn")) $("heroBtn").textContent = t.explore;
  }

  if ($("aboutTitle")) {
    $("aboutTitle").textContent = t.aboutTitle;
    $("aboutDesc").textContent = t.aboutDesc;
  }

  if ($("servicesTitle")) {
    $("servicesTitle").textContent = t.servicesTitle;
  }

  if ($("contactTitle")) {
    $("contactTitle").textContent = t.contactTitle;
    $("contactDesc").textContent = t.contactDesc;
  }
}

/* ================= Menus ================= */
function toggleLang() {
  const m = $("langMenu");
  if (m) m.style.display = m.style.display === "block" ? "none" : "block";
}

function toggleMobileMenu() {
  $("navMobile").classList.toggle("open");
}

/* ================= Init ================= */
window.addEventListener("DOMContentLoaded", () => {
  fetch("/assets/partials/nav.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("siteNav").innerHTML = html;
      setLang(localStorage.getItem("lang") || "ko");
    });
});
