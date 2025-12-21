const LANG = {
  ko: {
    nav: ["홈", "회사소개", "서비스", "문의"],
    heroTitle: "기업의 디지털 성장을 함께합니다",
    heroDesc: "VioniaSoft는 기업을 위한 IT 및 소프트웨어 솔루션을 제공합니다.",
    heroSub: "단기 개발이 아닌, 실제 비즈니스 환경에서 안정적으로 운영될 수 있는 시스템을 만듭니다.",
    heroBtn: "서비스 알아보기"
  },

  en: {
    nav: ["Home", "About", "Services", "Contact"],
    heroTitle: "Supporting Your Digital Growth",
    heroDesc: "VioniaSoft delivers IT & software solutions for businesses.",
    heroSub: "We focus on stability, scalability, and real operational needs.",
    heroBtn: "View Services"
  },

  zh: {
    nav: ["首页", "关于我们", "服务", "联系"],
    heroTitle: "助力企业实现数字化增长",
    heroDesc: "VioniaSoft 为企业提供 IT 与软件解决方案。",
    heroSub: "我们专注于长期稳定、可扩展的系统建设。",
    heroBtn: "查看服务"
  },

  fr: {
    nav: ["Accueil", "À propos", "Services", "Contact"],
    heroTitle: "Soutenir votre croissance numérique",
    heroDesc: "VioniaSoft fournit des solutions informatiques fiables.",
    heroSub: "Nous privilégions la stabilité et l’évolutivité à long terme.",
    heroBtn: "Voir les services"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-nav]").forEach((el, i) => {
    el.innerText = LANG[lang].nav[i];
  });

  document.querySelectorAll("[data-i]").forEach(el => {
    const key = el.dataset.i;
    el.innerText = LANG[lang][key];
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "ko";
  setLang(lang);
});
