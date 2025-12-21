let langOpen=false;
let menuOpen=false;

const T={
  ko:{
    nav:["홈","회사소개","서비스","문의"],
    hero:"기업의 디지털 성장을 함께합니다",
    desc:"비오니아소프트는 안정적인 IT 솔루션을 제공합니다.",
    btn:"서비스 알아보기",

    aboutTitle:"회사 소개",
    aboutDesc:"비즈니스를 이해하는 기술 파트너입니다.",
    aboutCards:[
      ["비즈니스 이해 중심","비즈니스 흐름을 우선합니다."],
      ["안정성과 확장성","장기 운영 구조 설계"],
      ["명확한 커뮤니케이션","투명한 진행"],
      ["지속적인 파트너십","프로젝트 이후도 함께"]
    ],

    servicesTitle:"서비스",
    services:[
      ["💻 소프트웨어 개발","맞춤형 시스템"],
      ["📊 IT 컨설팅","구조 분석"],
      ["☁️ 클라우드","AWS / Azure"],
      ["🚀 프로젝트 관리","End-to-end"]
    ],

    contactTitle:"문의하기",
    contactDesc:"언제든지 연락 주세요",
    form:["회사명","이름","이메일","문의 내용","보내기"]
  },

  en:{
    nav:["Home","About","Services","Contact"],
    hero:"Supporting Digital Growth",
    desc:"Reliable IT solutions for business.",
    btn:"View Services",

    aboutTitle:"About Us",
    aboutDesc:"We understand business first.",
    aboutCards:[
      ["Business First","Flow focused"],
      ["Scalable","Long-term design"],
      ["Clear Communication","Transparent"],
      ["Partnership","Beyond delivery"]
    ],

    servicesTitle:"Services",
    services:[
      ["💻 Development","Custom systems"],
      ["📊 Consulting","Architecture"],
      ["☁️ Cloud","AWS / Azure"],
      ["🚀 Management","Full cycle"]
    ],

    contactTitle:"Contact",
    contactDesc:"Feel free to reach out",
    form:["Company","Name","Email","Message","Send"]
  },

  zh:{
    nav:["首页","关于我们","服务","联系"],
    hero:"助力企业数字化成长",
    desc:"稳定可靠的 IT 解决方案。",
    btn:"查看服务",

    aboutTitle:"关于我们",
    aboutDesc:"以业务为中心的技术团队。",
    aboutCards:[
      ["理解业务","业务优先"],
      ["稳定扩展","长期架构"],
      ["沟通透明","过程清晰"],
      ["长期合作","持续支持"]
    ],

    servicesTitle:"服务",
    services:[
      ["💻 软件开发","定制系统"],
      ["📊 IT 咨询","架构设计"],
      ["☁️ 云服务","AWS / Azure"],
      ["🚀 项目管理","全流程"]
    ],

    contactTitle:"联系我们",
    contactDesc:"欢迎随时联系",
    form:["公司","姓名","邮箱","内容","发送"]
  },

  fr:{
    nav:["Accueil","À propos","Services","Contact"],
    hero:"Croissance numérique",
    desc:"Solutions IT fiables.",
    btn:"Voir les services",

    aboutTitle:"À propos",
    aboutDesc:"La technologie au service du business.",
    aboutCards:[
      ["Business","Priorité métier"],
      ["Scalable","Long terme"],
      ["Communication","Clair"],
      ["Partenariat","Durable"]
    ],

    servicesTitle:"Services",
    services:[
      ["💻 Développement","Systèmes"],
      ["📊 Conseil","Architecture"],
      ["☁️ Cloud","AWS / Azure"],
      ["🚀 Gestion","Complet"]
    ],

    contactTitle:"Contact",
    contactDesc:"Contactez-nous",
    form:["Entreprise","Nom","Email","Message","Envoyer"]
  }
};

function setLang(l){
  localStorage.setItem("lang",l);

  document.querySelectorAll("[data-nav]").forEach((el,i)=>{
    el.innerText=T[l].nav[i];
  });

  document.querySelectorAll("[data-i]").forEach(el=>{
    el.innerText=T[l][el.dataset.i];
  });

  if(window.aboutCards){
    aboutCards.innerHTML="";
    T[l].aboutCards.forEach(c=>{
      aboutCards.innerHTML+=`<div class="card"><h3>${c[0]}</h3><p>${c[1]}</p></div>`;
    });
  }

  if(window.serviceCards){
    serviceCards.innerHTML="";
    T[l].services.forEach(s=>{
      serviceCards.innerHTML+=`<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div>`;
    });
  }

  if(window.cname){
    const f=T[l].form;
    cname.placeholder=f[0];
    pname.placeholder=f[1];
    email.placeholder=f[2];
    msg.placeholder=f[3];
    submit.innerText=f[4];
  }
}

window.onload=()=>{
  setLang(localStorage.getItem("lang")||"ko");
};
