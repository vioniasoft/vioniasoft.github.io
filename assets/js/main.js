const LANG = {
  ko:{
    nav:{home:"홈",about:"회사소개",services:"서비스",contact:"문의"},
    aboutHeroTitle:"회사 소개",
    aboutHeroDesc:"비즈니스를 이해하는 기술 파트너입니다.",
    aboutTitle:"비즈니스 중심의 기술",
    aboutDesc:"VioniaSoft는 단순 개발이 아닌, 실제 비즈니스 운영을 이해하는 기술 파트너입니다.",
    aboutCard1Title:"비즈니스 이해",
    aboutCard1Desc:"업무 흐름과 목표를 먼저 이해합니다.",
    aboutCard2Title:"안정적 구조",
    aboutCard2Desc:"장기 운영 가능한 시스템 설계",
    aboutCard3Title:"명확한 소통",
    aboutCard3Desc:"진행 상황을 투명하게 공유",
    aboutCard4Title:"지속 파트너십",
    aboutCard4Desc:"프로젝트 이후도 함께",

    servicesHeroTitle:"서비스",
    servicesHeroDesc:"기획부터 운영까지 함께합니다.",
    servicesTitle:"제공 서비스",
    servicesDesc:"기업 환경에 최적화된 IT 솔루션을 제공합니다.",
    service1Title:"맞춤형 개발",
    service1Desc:"업무에 맞는 시스템 구축",
    service2Title:"IT 컨설팅",
    service2Desc:"구조 개선 및 기술 전략",
    service3Title:"클라우드",
    service3Desc:"안정적인 인프라 운영",
    service4Title:"프로젝트 관리",
    service4Desc:"전 과정 책임 관리"
  },

  en:{
    nav:{home:"Home",about:"About",services:"Services",contact:"Contact"},
    aboutHeroTitle:"About Us",
    aboutHeroDesc:"Your business-focused technology partner.",
    aboutTitle:"Technology for Business",
    aboutDesc:"We design systems that align with real business operations.",
    aboutCard1Title:"Business Understanding",
    aboutCard1Desc:"We start from your workflow.",
    aboutCard2Title:"Stable Architecture",
    aboutCard2Desc:"Built for long-term growth",
    aboutCard3Title:"Clear Communication",
    aboutCard3Desc:"Transparent progress",
    aboutCard4Title:"Long-term Partner",
    aboutCard4Desc:"Beyond delivery",

    servicesHeroTitle:"Services",
    servicesHeroDesc:"From planning to operation.",
    servicesTitle:"What We Do",
    servicesDesc:"Optimized IT solutions for companies.",
    service1Title:"Custom Development",
    service1Desc:"Tailored systems",
    service2Title:"IT Consulting",
    service2Desc:"Architecture & strategy",
    service3Title:"Cloud Solutions",
    service3Desc:"Stable infrastructure",
    service4Title:"Project Management",
    service4Desc:"End-to-end delivery"
  },

  zh:{
    nav:{home:"首页",about:"关于我们",services:"服务",contact:"联系"},
    aboutHeroTitle:"关于我们",
    aboutHeroDesc:"理解业务的技术伙伴",
    aboutTitle:"以业务为中心",
    aboutDesc:"我们构建真正可运营的系统。",
    aboutCard1Title:"理解业务",
    aboutCard1Desc:"从流程出发",
    aboutCard2Title:"稳定架构",
    aboutCard2Desc:"长期可扩展",
    aboutCard3Title:"清晰沟通",
    aboutCard3Desc:"过程透明",
    aboutCard4Title:"长期合作",
    aboutCard4Desc:"持续支持",

    servicesHeroTitle:"服务",
    servicesHeroDesc:"从规划到运营",
    servicesTitle:"我们的服务",
    servicesDesc:"为企业定制 IT 方案",
    service1Title:"定制开发",
    service1Desc:"业务系统开发",
    service2Title:"IT 咨询",
    service2Desc:"架构与策略",
    service3Title:"云服务",
    service3Desc:"稳定运行",
    service4Title:"项目管理",
    service4Desc:"全流程负责"
  },

  fr:{
    nav:{home:"Accueil",about:"À propos",services:"Services",contact:"Contact"},
    aboutHeroTitle:"À propos",
    aboutHeroDesc:"Partenaire technologique orienté business",
    aboutTitle:"Technologie & Business",
    aboutDesc:"Des systèmes pensés pour l’exploitation réelle.",
    aboutCard1Title:"Vision métier",
    aboutCard1Desc:"Comprendre vos besoins",
    aboutCard2Title:"Architecture stable",
    aboutCard2Desc:"Pensée long terme",
    aboutCard3Title:"Communication claire",
    aboutCard3Desc:"Processus transparent",
    aboutCard4Title:"Partenariat durable",
    aboutCard4Desc:"Au-delà du projet",

    servicesHeroTitle:"Services",
    servicesHeroDesc:"De la stratégie à l’exploitation",
    servicesTitle:"Nos services",
    servicesDesc:"Solutions IT adaptées",
    service1Title:"Développement",
    service1Desc:"Solutions sur mesure",
    service2Title:"Conseil IT",
    service2Desc:"Stratégie & structure",
    service3Title:"Cloud",
    service3Desc:"Infrastructure fiable",
    service4Title:"Gestion de projet",
    service4Desc:"De bout en bout"
  }
};

/* ===== APPLY LANGUAGE ===== */
function setLang(lang){
  localStorage.setItem("lang",lang);
  const t = LANG[lang];

  document.querySelectorAll("[data-nav]").forEach(el=>{
    el.innerText = t.nav[el.dataset.nav];
  });

  document.querySelectorAll("[data-i]").forEach(el=>{
    el.innerText = t[el.dataset.i];
  });
}

/* ===== FADE-UP TRIGGER ===== */
window.addEventListener("load",()=>{
  const lang = localStorage.getItem("lang") || "ko";
  setLang(lang);

  document.querySelectorAll(".fade-up").forEach(el=>{
    setTimeout(()=>el.classList.add("appeared"),100);
  });
});
