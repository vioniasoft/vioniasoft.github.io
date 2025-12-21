let currentLang = localStorage.getItem("lang") || "ko";
let menuOpen = false;

const LANG = {
ko:{
nav:["홈","회사 소개","서비스","문의"],
homeTitle:"기업의 디지털 성장을 함께합니다",
homeDesc:"비오니아소프트는 기업을 위한 IT 및 소프트웨어 솔루션 전문 스튜디오입니다.",
homeBtn:"서비스 알아보기",
aboutTitle:"회사 소개",
aboutDesc:"기술을 비즈니스 성장 전략으로 설계합니다.",
servicesTitle:"서비스",
contactTitle:"문의하기"
},
en:{
nav:["Home","About","Services","Contact"],
homeTitle:"Supporting Your Digital Growth",
homeDesc:"VioniaSoft delivers reliable IT & software solutions.",
homeBtn:"View Services",
aboutTitle:"About Us",
aboutDesc:"Technology as a business strategy.",
servicesTitle:"Services",
contactTitle:"Contact"
},
zh:{
nav:["首页","关于我们","服务","联系我们"],
homeTitle:"助力企业实现数字化增长",
homeDesc:"VioniaSoft 为企业提供稳定的软件与 IT 解决方案。",
homeBtn:"查看服务",
aboutTitle:"关于我们",
aboutDesc:"以技术驱动业务成长。",
servicesTitle:"服务",
contactTitle:"联系我们"
},
fr:{
nav:["Accueil","À propos","Services","Contact"],
homeTitle:"Croissance numérique",
homeDesc:"Solutions IT fiables pour entreprises.",
homeBtn:"Voir les services",
aboutTitle:"À propos",
aboutDesc:"La technologie au service du business.",
servicesTitle:"Services",
contactTitle:"Contact"
}
};

function setLang(l){
currentLang = l;
localStorage.setItem("lang",l);

document.querySelectorAll("[data-nav]").forEach((el,i)=>{
el.innerText = LANG[l].nav[i];
});
document.querySelectorAll("[data-i18n]").forEach(el=>{
el.innerText = LANG[l][el.dataset.i18n];
});

closeMenu();
}

function toggleMenu(){
menuOpen = !menuOpen;
document.getElementById("mobileMenu").style.display = menuOpen?"block":"none";
document.getElementById("overlay").style.display = menuOpen?"block":"none";
}

function toggleMobileLang(){
const ml = document.getElementById("mobileLang");
ml.style.display = ml.style.display==="block"?"none":"block";
}

function closeMenu(){
menuOpen=false;
document.getElementById("mobileMenu").style.display="none";
document.getElementById("overlay").style.display="none";
}

window.onload = ()=> setLang(currentLang);
