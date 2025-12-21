const T={
  ko:{
    nav:["홈","회사소개","서비스","문의"],
    hero:"기업의 디지털 성장을 함께합니다",
    desc:"비오니아소프트는 안정적인 IT 솔루션을 제공합니다.",
    btn:"서비스 알아보기",
    aboutTitle:"회사 소개",
    aboutDesc:"비즈니스를 이해하는 기술 파트너입니다.",
    aboutCards:[
      ["비즈니스 이해 중심","업무 흐름을 먼저 이해합니다"],
      ["안정성과 확장성","장기 운영 구조"],
      ["명확한 소통","투명한 커뮤니케이션"],
      ["지속적 협력","프로젝트 이후도 함께"]
    ],
    servicesTitle:"서비스",
    services:[
      ["소프트웨어 개발","맞춤형 시스템"],
      ["IT 컨설팅","구조 분석"],
      ["클라우드","AWS / Azure"],
      ["프로젝트 관리","전 과정"]
    ],
    contactTitle:"문의하기",
    contactDesc:"메일로 바로 연락 주세요"
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
      ["Development","Custom systems"],
      ["Consulting","Architecture"],
      ["Cloud","AWS / Azure"],
      ["Management","Full cycle"]
    ],
    contactTitle:"Contact",
    contactDesc:"Send us an email anytime"
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
      ["软件开发","定制系统"],
      ["IT 咨询","架构设计"],
      ["云服务","AWS / Azure"],
      ["项目管理","全流程"]
    ],
    contactTitle:"联系我们",
    contactDesc:"欢迎通过邮件联系"
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
      ["Développement","Systèmes"],
      ["Conseil","Architecture"],
      ["Cloud","AWS / Azure"],
      ["Gestion","Complet"]
    ],
    contactTitle:"Contact",
    contactDesc:"Contactez-nous par email"
  }
};

function setLang(l){
  localStorage.setItem("lang",l);
  const t=T[l];

  document.querySelectorAll("[data-nav]").forEach((el,i)=>{
    el.textContent=t.nav[i];
  });

  if(window.heroTitle){
    heroTitle.textContent=t.hero;
    heroDesc.textContent=t.desc;
    heroBtn.textContent=t.btn;
  }

  if(window.aboutCards){
    aboutTitle.textContent=t.aboutTitle;
    aboutDesc.textContent=t.aboutDesc;
    aboutCards.innerHTML="";
    t.aboutCards.forEach(c=>{
      aboutCards.innerHTML+=`<div class="card"><h3>${c[0]}</h3><p>${c[1]}</p></div>`;
    });
    observeCards();
  }

  if(window.serviceCards){
    servicesTitle.textContent=t.servicesTitle;
    serviceCards.innerHTML="";
    t.services.forEach(s=>{
      serviceCards.innerHTML+=`<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div>`;
    });
    observeCards();
  }

  if(window.contactTitle){
    contactTitle.textContent=t.contactTitle;
    contactDesc.textContent=t.contactDesc;
  }
}

function toggleLang(){
  const m=document.getElementById("langMenu");
  m.style.display=m.style.display==="block"?"none":"block";
}

/* ===== Card observer ===== */
let observer;
function observeCards(){
  if(observer) observer.disconnect();
  observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("show");
        observer.unobserve(e.target);
      }
    });
  },{threshold:0.2});
  document.querySelectorAll(".card").forEach(c=>{
    c.classList.remove("show");
    observer.observe(c);
  });
}

window.onload=()=>{
  setLang(localStorage.getItem("lang")||"ko");
};
