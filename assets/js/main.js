/* ===============================
   VioniaSoft Main JS
   =============================== */

/* ---------- Language Data ---------- */
const LANG = {
  ko:{
    nav:{home:"홈",about:"회사소개",services:"서비스",contact:"문의"},

    /* Home */
    heroTitle:"기업의 디지털 성장을 함께합니다",
    heroDesc:"비오니아소프트는 비즈니스를 이해하는 IT 솔루션 파트너입니다.",
    heroBtn:"서비스 알아보기",

    /* About */
    aboutHeroTitle:"회사 소개",
    aboutHeroDesc:"비즈니스를 이해하는 기술 파트너입니다.",
    aboutTitle:"비즈니스 중심의 기술",
    aboutDesc:"우리는 단순한 개발이 아닌, 실제 운영되는 비즈니스 환경을 이해하고 시스템을 설계합니다.",
    aboutCard1Title:"비즈니스 이해",
    aboutCard1Desc:"업무 흐름과 조직 구조를 먼저 파악합니다.",
    aboutCard2Title:"안정적 구조",
    aboutCard2Desc:"장기 운영과 확장을 고려한 설계",
    aboutCard3Title:"명확한 소통",
    aboutCard3Desc:"과정과 결과를 투명하게 공유",
    aboutCard4Title:"지속 파트너십",
    aboutCard4Desc:"프로젝트 이후에도 함께 성장",

    /* Services */
    servicesHeroTitle:"서비스",
    servicesHeroDesc:"기획부터 운영까지 함께합니다.",
    servicesTitle:"제공 서비스",
    servicesDesc:"기업 환경에 최적화된 IT 솔루션을 제공합니다.",
    service1Title:"맞춤형 소프트웨어 개발",
    service1Desc:"업무에 맞춘 웹·시스템 개발",
    service2Title:"IT 컨설팅",
    service2Desc:"구조 분석 및 기술 전략 수립",
    service3Title:"클라우드 솔루션",
    service3Desc:"안정적인 인프라 구축과 운영",
    service4Title:"프로젝트 관리",
    service4Desc:"기획부터 유지보수까지"
  },

  en:{
    nav:{home:"Home",about:"About",services:"Services",contact:"Contact"},

    heroTitle:"Supporting Your Digital Growth",
    heroDesc:"VioniaSoft is a business-focused IT solution partner.",
    heroBtn:"View Services",

    aboutHeroTitle:"About Us",
    aboutHeroDesc:"A technology partner who understands business.",
    aboutTitle:"Business-Oriented Technology",
    aboutDesc:"We design systems based on real operational needs.",
    aboutCard1Title:"Business Understanding",
    aboutCard1Desc:"We start from your workflow",
    aboutCard2Title:"Stable Architecture",
    aboutCard2Desc:"Designed for long-term growth",
    aboutCard3Title:"Clear Communication",
    aboutCard3Desc:"Transparent process",
    aboutCard4Title:"Long-Term Partner",
    aboutCard4Desc:"Growing together",

    servicesHeroTitle:"Services",
    servicesHeroDesc:"From planning to operation.",
    servicesTitle:"Our Services",
    servicesDesc:"Optimized IT solutions for companies.",
    service1Title:"Custom Development",
    service1Desc:"Tailored business systems",
    service2Title:"IT Consulting",
    service2Desc:"Architecture & strategy",
    service3Title:"Cloud Solutions",
    service3Desc:"Reliable infrastructure",
    service4Title:"Project Management",
    service4Desc:"End-to-end delivery"
  },

  zh:{
    nav:{home:"首页",about:"关于我们",services:"服务",contact:"联系"},

    heroTitle:"助力企业实现数字化增长",
    heroDesc:"VioniaSoft 是理解业务的 IT 解决方案伙伴。",
    heroBtn:"查看服务",

    aboutHeroTitle:"关于我们",
    aboutHeroDesc:"理解业务的技术伙伴",
    aboutTitle:"以业务为核心",
    aboutDesc:"我们构建真正可以长期运营的系统。",
    aboutCard1Title:"理解业务",
    aboutCard1Desc:"从流程出发",
    aboutCard2Title:"稳定架构",
    aboutCard2Desc:"支持长期扩展",
    aboutCard3Title:"清晰沟通",
    aboutCard3Desc:"过程透明",
    aboutCard4Title:"长期合作",
    aboutCard4Desc:"持续支持",

    servicesHeroTitle:"服务",
    servicesHeroDesc:"从规划到运营",
    servicesTitle:"我们的服务",
    servicesDesc:"为企业定制 IT 解决方案",
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

    heroTitle:"Accompagner votre croissance numérique",
    heroDesc:"VioniaSoft est un partenaire IT orienté business.",
    heroBtn:"Voir les services",

    aboutHeroTitle:"À propos",
    aboutHeroDesc:"Partenaire technologique orienté business",
    aboutTitle:"Technologie & Business",
    aboutDesc:"Des systèmes pensés pour une exploitation réelle.",
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

/* ---------- Apply Language ---------- */
function setLang(lang){
  localStorage.setItem("lang",lang);
  const t = LANG[lang];

  /* nav */
  document.querySelectorAll("[data-nav]").forEach(el=>{
    el.innerText = t.nav[el.dataset.nav];
  });

  /* text */
  document.querySelectorAll("[data-i]").forEach(el=>{
    if(t[el.dataset.i]){
      el.innerText = t[el.dataset.i];
    }
  });

  /* home hero (ID based, avoid undefined) */
  if(document.getElementById("heroTitle")){
    heroTitle.innerText = t.heroTitle;
    heroDesc.innerText  = t.heroDesc;
    heroBtn.innerText   = t.heroBtn;
    heroBtn.href        = "services.html";
  }
}

/* ---------- On Load ---------- */
window.addEventListener("load",()=>{
  const lang = localStorage.getItem("lang") || "ko";
  setLang(lang);

  /* fade-up for about / services */
  document.querySelectorAll(".fade-up").forEach(el=>{
    setTimeout(()=>el.classList.add("appeared"),100);
  });
});
