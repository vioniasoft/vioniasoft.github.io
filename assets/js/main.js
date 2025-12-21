const T={
  ko:{
    nav:["홈","회사소개","서비스","문의"],
    hero:"기업의 디지털 성장을 함께합니다",
    desc:"비오니아소프트는 안정적인 IT 솔루션을 제공합니다.",
    btn:"서비스 알아보기",
    aboutTitle:"회사 소개",
    aboutDesc:"비즈니스를 이해하는 기술 파트너입니다.",
    aboutCards:[
      ["비즈니스 이해","업무 흐름 중심"],
      ["안정성과 확장성","장기 구조"],
      ["명확한 소통","투명한 협업"],
      ["지속적 파트너","프로젝트 이후도"]
    ],
    servicesTitle:"서비스",
    services:[
      ["소프트웨어 개발","맞춤형 시스템"],
      ["IT 컨설팅","구조 설계"],
      ["클라우드","AWS / Azure"],
      ["프로젝트 관리","전 과정"]
    ],
    contactTitle:"문의하기",
    contactDesc:"contact@vioniasoft.com"
  },
  en:{
    nav:["Home","About","Services","Contact"],
    hero:"Supporting Digital Growth",
    desc:"Reliable IT solutions for business.",
    btn:"View Services",
    aboutTitle:"About Us",
    aboutDesc:"We understand business first.",
    aboutCards:[
      ["Business","First"],
      ["Scalable","Long term"],
      ["Communication","Clear"],
      ["Partnership","Ongoing"]
    ],
    servicesTitle:"Services",
    services:[
      ["Development","Custom systems"],
      ["Consulting","Architecture"],
      ["Cloud","AWS / Azure"],
      ["Management","Full cycle"]
    ],
    contactTitle:"Contact",
    contactDesc:"contact@vioniasoft.com"
  }
};

function setLang(l){
  localStorage.setItem("lang",l);
  const t=T[l];

  document.querySelectorAll("[data-nav]").forEach((el,i)=>el.textContent=t.nav[i]);

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
  }

  if(window.serviceCards){
    servicesTitle.textContent=t.servicesTitle;
    serviceCards.innerHTML="";
    t.services.forEach(s=>{
      serviceCards.innerHTML+=`<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div>`;
    });
  }

  if(window.contactTitle){
    contactTitle.textContent=t.contactTitle;
    contactDesc.textContent=t.contactDesc;
  }

  langMenu.style.display="none";
}

function toggleLang(){
  langMenu.style.display=langMenu.style.display==="block"?"none":"block";
}

window.onload=()=>setLang(localStorage.getItem("lang")||"ko");
