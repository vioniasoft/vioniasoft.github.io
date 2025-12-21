let menuOpen=false;
let langOpen=false;

const LANG={
  ko:{
    nav:["홈","회사소개","서비스","문의"],
    heroTitle:"기업의 디지털 성장을 함께합니다",
    heroDesc:"VioniaSoft는 기업을 위한 IT 및 소프트웨어 솔루션을 제공합니다.",
    heroBtn:"서비스 알아보기",

    aboutTitle:"회사 소개",
    aboutDesc:"비오니아소프트는 기술을 비즈니스 성장의 핵심 도구로 활용합니다.",
    aboutCards:[
      ["비즈니스 이해 중심","업무 흐름을 먼저 이해합니다."],
      ["안정성과 확장성","장기 운영 구조 설계"],
      ["명확한 커뮤니케이션","투명한 협업"],
      ["지속적인 파트너십","프로젝트 이후까지"]
    ],

    servicesTitle:"서비스",
    services:[
      ["맞춤형 개발","비즈니스 맞춤 시스템"],
      ["IT 컨설팅","구조 개선 제안"],
      ["클라우드","AWS / Azure"],
      ["프로젝트 관리","기획부터 운영까지"]
    ],

    contactTitle:"문의하기",
    contactDesc:"언제든지 편하게 연락 주세요.",
    form:["회사명","담당자","이메일","문의 내용","문의 보내기"]
  },

  en:{
    nav:["Home","About","Services","Contact"],
    heroTitle:"Supporting Your Digital Growth",
    heroDesc:"VioniaSoft delivers reliable IT solutions.",
    heroBtn:"View Services",

    aboutTitle:"About Us",
    aboutDesc:"We align technology with real business needs.",
    aboutCards:[
      ["Business Focus","Understand workflows"],
      ["Scalability","Built for growth"],
      ["Transparency","Clear communication"],
      ["Partnership","Beyond delivery"]
    ],

    servicesTitle:"Services",
    services:[
      ["Development","Custom systems"],
      ["Consulting","IT strategy"],
      ["Cloud","AWS / Azure"],
      ["Management","End-to-end"]
    ],

    contactTitle:"Contact",
    contactDesc:"Feel free to reach out.",
    form:["Company","Name","Email","Message","Send"]
  },

  zh:{
    nav:["首页","关于我们","服务","联系"],
    heroTitle:"助力企业实现数字化增长",
    heroDesc:"VioniaSoft 提供企业级 IT 解决方案。",
    heroBtn:"查看服务",

    aboutTitle:"关于我们",
    aboutDesc:"我们将技术视为商业增长的一部分。",
    aboutCards:[
      ["理解业务","先理解流程"],
      ["稳定扩展","长期架构"],
      ["透明沟通","清晰协作"],
      ["长期合作","持续支持"]
    ],

    servicesTitle:"服务",
    services:[
      ["软件开发","定制系统"],
      ["IT 咨询","技术规划"],
      ["云服务","AWS / Azure"],
      ["项目管理","全流程"]
    ],

    contactTitle:"联系我们",
    contactDesc:"欢迎随时咨询。",
    form:["公司","姓名","邮箱","内容","发送"]
  },

  fr:{
    nav:["Accueil","À propos","Services","Contact"],
    heroTitle:"Croissance numérique",
    heroDesc:"Solutions informatiques fiables.",
    heroBtn:"Voir services",

    aboutTitle:"À propos",
    aboutDesc:"La technologie au service du business.",
    aboutCards:[
      ["Vision métier","Flux réels"],
      ["Scalabilité","Long terme"],
      ["Clarté","Communication"],
      ["Partenariat","Durable"]
    ],

    servicesTitle:"Services",
    services:[
      ["Développement","Sur mesure"],
      ["Conseil IT","Stratégie"],
      ["Cloud","AWS / Azure"],
      ["Gestion","Complet"]
    ],

    contactTitle:"Contact",
    contactDesc:"Contactez-nous librement.",
    form:["Société","Nom","Email","Message","Envoyer"]
  }
};

function setLang(l){
  localStorage.setItem("lang",l);

  document.querySelectorAll("[data-nav]").forEach((el,i)=>{
    el.innerText=LANG[l].nav[i];
  });

  document.querySelectorAll("[data-i]").forEach(el=>{
    el.innerText=LANG[l][el.dataset.i];
  });

  if(document.getElementById("aboutCards")){
    aboutCards.innerHTML="";
    LANG[l].aboutCards.forEach(c=>{
      aboutCards.innerHTML+=`<div class="card"><h3>${c[0]}</h3><p>${c[1]}</p></div>`;
    });
  }

  if(document.getElementById("serviceCards")){
    serviceCards.innerHTML="";
    LANG[l].services.forEach(s=>{
      serviceCards.innerHTML+=`<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div>`;
    });
  }

  if(document.getElementById("cname")){
    const f=LANG[l].form;
    cname.placeholder=f[0];
    pname.placeholder=f[1];
    email.placeholder=f[2];
    msg.placeholder=f[3];
    submit.innerText=f[4];
  }

  closeAll();
}

function toggleMenu(){
  menuOpen=!menuOpen;
  mobileMenu.style.display=menuOpen?"block":"none";
}
function toggleLang(){
  langOpen=!langOpen;
  langMenu.style.display=langOpen?"block":"none";
}
function toggleMobileLang(){
  mobileLang.style.display=mobileLang.style.display==="block"?"none":"block";
}
function closeAll(){
  menuOpen=false;
  langOpen=false;
  mobileMenu.style.display="none";
  langMenu.style.display="none";
}

window.onload=()=>setLang(localStorage.getItem("lang")||"ko");
