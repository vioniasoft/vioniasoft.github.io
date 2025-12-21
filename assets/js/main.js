const LANG = {
  ko: {
    nav: ["홈", "회사소개", "서비스", "문의"],

    heroTitle: "기업의 디지털 성장을 함께합니다",
    heroDesc: "VioniaSoft는 기업을 위한 IT 및 소프트웨어 솔루션을 제공합니다.",
    heroSub: "단기 개발이 아닌, 실제 비즈니스 환경에서 안정적으로 운영될 수 있는 시스템을 만듭니다.",
    heroBtn: "서비스 알아보기",

    aboutTitle: "회사 소개",
    aboutDesc: "비오니아소프트는 기술을 비즈니스 전략의 일부로 접근합니다.",
    aboutCards: [
      ["비즈니스 이해 중심", "실제 운영 흐름과 조직 구조를 먼저 이해합니다."],
      ["안정성과 확장성", "장기 운영을 전제로 한 구조를 설계합니다."],
      ["명확한 커뮤니케이션", "모든 과정을 투명하게 공유합니다."],
      ["지속적인 파트너십", "프로젝트 이후에도 함께 개선합니다."]
    ],

    servicesTitle: "서비스",
    services: [
      ["💻 맞춤형 소프트웨어 개발", "업무에 최적화된 시스템 개발"],
      ["📊 IT 컨설팅", "시스템 분석 및 기술 전략 수립"],
      ["☁️ 클라우드 솔루션", "AWS · Azure 기반 인프라"],
      ["🚀 프로젝트 관리", "기획부터 운영까지 전 과정 관리"]
    ],

    contactTitle: "문의하기",
    contactDesc: "프로젝트 제안이나 협업 문의를 남겨주세요.",
    form: ["회사명", "담당자 이름", "이메일", "문의 내용", "문의 보내기"]
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
      ["Business-Oriented", "Understanding real business operations"],
      ["Stable & Scalable", "Designed for long-term growth"],
      ["Clear Communication", "Transparent collaboration"],
      ["Long-Term Partner", "Continuous improvement"]
    ],

    servicesTitle: "Services",
    services: [
      ["💻 Software Development", "Custom business systems"],
      ["📊 IT Consulting", "Architecture & strategy"],
      ["☁️ Cloud Solutions", "Infrastructure & operations"],
      ["🚀 Project Management", "End-to-end delivery"]
    ],

    contactTitle: "Contact",
    contactDesc: "Feel free to contact us for collaboration.",
    form: ["Company", "Name", "Email", "Message", "Send"]
  },

  zh: {
    nav: ["首页", "关于我们", "服务", "联系"],

    heroTitle: "助力企业实现数字化增长",
    heroDesc: "VioniaSoft 为企业提供 IT 与软件解决方案。",
    heroSub: "专注于长期稳定与可扩展的系统建设。",
    heroBtn: "查看服务",

    aboutTitle: "关于我们",
    aboutDesc: "我们将技术视为商业战略的重要组成部分。",
    aboutCards: [
      ["以业务理解为核心", "优先理解真实业务流程"],
      ["稳定与扩展性", "为长期运营而设计"],
      ["清晰沟通", "全过程透明协作"],
      ["长期合作伙伴", "持续优化与支持"]
    ],

    servicesTitle: "服务",
    services: [
      ["💻 软件开发", "定制化企业系统"],
      ["📊 IT 咨询", "技术架构与规划"],
      ["☁️ 云解决方案", "云基础设施部署"],
      ["🚀 项目管理", "全流程项目管理"]
    ],

    contactTitle: "联系我们",
    contactDesc: "欢迎随时与我们取得联系。",
    form: ["公司", "姓名", "邮箱", "内容", "发送"]
  },

  fr: {
    nav: ["Accueil", "À propos", "Services", "Contact"],

    heroTitle: "Soutenir votre croissance numérique",
    heroDesc: "VioniaSoft fournit des solutions informatiques fiables.",
    heroSub: "Stabilité et évolutivité à long terme.",
    heroBtn: "Voir les services",

    aboutTitle: "À propos",
    aboutDesc: "La technologie comme partie intégrante de la stratégie métier.",
    aboutCards: [
      ["Orientation métier", "Compréhension des besoins réels"],
      ["Stabilité & évolutivité", "Pensé pour le long terme"],
      ["Communication claire", "Processus transparent"],
      ["Partenaire durable", "Amélioration continue"]
    ],

    servicesTitle: "Services",
    services: [
      ["💻 Développement", "Systèmes sur mesure"],
      ["📊 Conseil IT", "Stratégie technique"],
      ["☁️ Cloud", "Infrastructure cloud"],
      ["🚀 Gestion de projet", "Gestion complète"]
    ],

    contactTitle: "Contact",
    contactDesc: "Contactez-nous à tout moment.",
    form: ["Entreprise", "Nom", "Email", "Message", "Envoyer"]
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

  const about = document.getElementById("aboutCards");
  if (about) {
    about.innerHTML = "";
    LANG[lang].aboutCards.forEach(c => {
      about.innerHTML += `<div class="card"><h3>${c[0]}</h3><p>${c[1]}</p></div>`;
    });
  }

  const services = document.getElementById("serviceCards");
  if (services) {
    services.innerHTML = "";
    LANG[lang].services.forEach(s => {
      services.innerHTML += `<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div>`;
    });
  }

  if (LANG[lang].form) {
    cname.placeholder = LANG[lang].form[0];
    pname.placeholder = LANG[lang].form[1];
    email.placeholder = LANG[lang].form[2];
    msg.placeholder = LANG[lang].form[3];
    submit.innerText = LANG[lang].form[4];
  }
}

window.onload = () => {
  setLang(localStorage.getItem("lang") || "ko");
};
