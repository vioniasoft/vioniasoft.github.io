const LANG = {
  ko: {
    nav: ["홈", "회사소개", "서비스", "문의"],

    heroTitle: "기업의 디지털 성장을 함께합니다",
    heroDesc: "VioniaSoft는 기업을 위한 IT 및 소프트웨어 솔루션을 제공합니다.",
    heroSub: "단기 개발이 아닌, 실제 비즈니스 환경에서 안정적으로 운영될 수 있는 시스템을 만듭니다。",
    heroBtn: "서비스 알아보기",

    aboutTitle: "회사 소개",
    aboutDesc: "비오니아소프트는 기술을 비즈니스 전략의 일부로 접근합니다.",
    aboutCards: [
      ["비즈니스 이해 중심", "실제 운영 흐름과 조직 구조를 먼저 이해합니다."],
      ["안정성과 확장성", "장기 운영을 전제로 한 구조를 설계합니다."],
      ["명확한 커뮤니케이션", "모든 과정을 투명하게 공유합니다."],
      ["지속적인 파트너십", "프로젝트 이후에도 함께 개선합니다."]
    ]
  },

  en: {
    nav: ["Home", "About", "Services", "Contact"],

    heroTitle: "Supporting Your Digital Growth",
    heroDesc: "VioniaSoft delivers IT & software solutions for businesses.",
    heroSub: "We focus on long-term stability and scalability.",
    heroBtn: "View Services",

    aboutTitle: "About Us",
    aboutDesc: "We approach technology as part of business strategy.",
    aboutCards: [
      ["Business-Oriented", "We understand real business operations."],
      ["Stable & Scalable", "Designed for long-term growth."],
      ["Clear Communication", "Transparent process and delivery."],
      ["Long-Term Partner", "Continuous improvement beyond launch."]
    ]
  },

  zh: {
    nav: ["首页", "关于我们", "服务", "联系"],

    heroTitle: "助力企业实现数字化增长",
    heroDesc: "VioniaSoft 为企业提供 IT 与软件解决方案。",
    heroSub: "我们专注于长期稳定、可扩展的系统建设。",
    heroBtn: "查看服务",

    aboutTitle: "关于我们",
    aboutDesc: "我们将技术视为商业战略的一部分。",
    aboutCards: [
      ["以业务理解为核心", "优先理解真实业务流程。"],
      ["稳定与扩展性", "为长期运营而设计。"],
      ["清晰沟通", "全过程透明协作。"],
      ["长期合作伙伴", "项目之后持续优化。"]
    ]
  },

  fr: {
    nav: ["Accueil", "À propos", "Services", "Contact"],

    heroTitle: "Soutenir votre croissance numérique",
    heroDesc: "VioniaSoft fournit des solutions informatiques fiables.",
    heroSub: "Nous privilégions la stabilité à long terme.",
    heroBtn: "Voir les services",

    aboutTitle: "À propos",
    aboutDesc: "Nous intégrons la technologie à la stratégie métier.",
    aboutCards: [
      ["Orientation métier", "Compréhension des opérations réelles."],
      ["Stabilité & évolutivité", "Pensé pour le long terme."],
      ["Communication claire", "Processus transparent."],
      ["Partenaire durable", "Amélioration continue."]
    ]
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-nav]").forEach((el, i) => {
    el.innerText = LANG[lang].nav[i];
  });

  document.querySelectorAll("[data-i]").forEach(el => {
    el.innerText = LANG[lang][el.dataset.i];
  });

  const cards = document.getElementById("aboutCards");
  if (cards) {
    cards.innerHTML = "";
    LANG[lang].aboutCards.forEach(c => {
      cards.innerHTML += `
        <div class="card">
          <h3>${c[0]}</h3>
          <p>${c[1]}</p>
        </div>`;
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang") || "ko");
});
