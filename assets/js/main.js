let currentLang="ko";
let langOpen=false;

const LANG={
ko:{nav:["홈","회사 소개","서비스","문의"],title:"기업의 디지털 성장을 함께합니다",desc:"비오니아소프트는 IT 전문 스튜디오입니다.",btn:"서비스 알아보기"},
en:{nav:["Home","About","Services","Contact"],title:"Supporting Your Digital Growth",desc:"VioniaSoft delivers IT solutions.",btn:"View Services"},
zh:{nav:["首页","关于我们","服务","联系我们"],title:"助力企业实现数字化增长",desc:"VioniaSoft 提供 IT 解决方案。",btn:"查看服务"},
fr:{nav:["Accueil","À propos","Services","Contact"],title:"Croissance numérique",desc:"Solutions IT fiables.",btn:"Voir les services"}
};

function setLang(l){
currentLang=l;
document.querySelectorAll(".nav-item").forEach((el,i)=>el.innerText=LANG[l].nav[i]);
if(document.getElementById("heroTitle")){
heroTitle.innerText=LANG[l].title;
heroDesc.innerText=LANG[l].desc;
heroBtn.innerText=LANG[l].btn;
}
langMenu.style.display="none";
}

function toggleLang(){
langOpen=!langOpen;
langMenu.style.display=langOpen?"block":"none";
}
