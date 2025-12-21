let menuOpen=false;
let langOpen=false;

const LANG={
  ko:{
    nav:["홈","회사소개","서비스","문의"],
    heroTitle:"기업의 디지털 성장을 함께합니다",
    heroDesc:"VioniaSoft는 기업을 위한 IT 및 소프트웨어 솔루션을 제공합니다.",
    heroSub:"장기적으로 안정적인 시스템을 설계합니다.",
    heroBtn:"서비스 알아보기"
  },
  en:{
    nav:["Home","About","Services","Contact"],
    heroTitle:"Supporting Your Digital Growth",
    heroDesc:"VioniaSoft delivers IT & software solutions.",
    heroSub:"Built for long-term stability and scalability.",
    heroBtn:"View Services"
  },
  zh:{
    nav:["首页","关于我们","服务","联系"],
    heroTitle:"助力企业实现数字化增长",
    heroDesc:"VioniaSoft 提供 IT 与软件解决方案。",
    heroSub:"专注长期稳定与可扩展性。",
    heroBtn:"查看服务"
  },
  fr:{
    nav:["Accueil","À propos","Services","Contact"],
    heroTitle:"Soutenir votre croissance numérique",
    heroDesc:"VioniaSoft fournit des solutions informatiques.",
    heroSub:"Stabilité et évolutivité à long terme.",
    heroBtn:"Voir les services"
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

  closeAll();
}

function toggleMenu(){
  menuOpen=!menuOpen;
  document.getElementById("mobileMenu").style.display=menuOpen?"block":"none";
}

function toggleLang(){
  langOpen=!langOpen;
  document.getElementById("langMenu").style.display=langOpen?"block":"none";
}

function toggleMobileLang(){
  const m=document.getElementById("mobileLang");
  m.style.display=m.style.display==="block"?"none":"block";
}

function closeAll(){
  menuOpen=false;
  langOpen=false;
  document.getElementById("mobileMenu").style.display="none";
  document.getElementById("langMenu").style.display="none";
}

window.onload=()=>{
  setLang(localStorage.getItem("lang")||"ko");
};
