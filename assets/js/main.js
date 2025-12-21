const T = {
ko:{
nav:["홈","회사소개","서비스","문의"],
hero:"기업의 디지털 성장을 함께합니다",
desc:"비오니아소프트는 기업의 실제 운영 환경에 맞는 IT·소프트웨어 솔루션을 설계하고 구축하는 기술 스튜디오입니다.",
sub:"단기 개발이 아닌, 안정적인 운영과 확장을 전제로 한 시스템을 만듭니다.",
explore:"서비스 알아보기",

aboutTitle:"회사 소개",
aboutDesc:"비오니아소프트는 기술을 단순한 개발 작업이 아닌, 비즈니스 성장을 위한 전략적 도구로 접근합니다.",
aboutCards:[
["비즈니스 이해 중심","고객의 업무 흐름과 운영 구조를 먼저 분석합니다."],
["안정성과 유지보수","장기 운영을 전제로 한 구조와 코드 품질을 중시합니다."],
["확장 가능한 설계","조직 성장과 서비스 확장을 고려한 아키텍처를 설계합니다."],
["지속적인 파트너십","프로젝트 이후에도 함께 개선합니다."]
],

servicesTitle:"서비스",
services:[
["💻 맞춤형 소프트웨어 개발","업무에 최적화된 웹·시스템 개발"],
["📊 IT 컨설팅","구조 분석 및 기술 전략 수립"],
["☁️ 클라우드","AWS / Azure 인프라 설계"],
["🚀 프로젝트 관리","기획부터 운영까지"]
],

contactTitle:"문의하기",
contactDesc:"프로젝트 제안 및 협업 문의를 환영합니다.",
form:["회사명","담당자","이메일","문의 내용","보내기"]
},

en:{
nav:["Home","About","Services","Contact"],
hero:"Supporting Sustainable Digital Growth",
desc:"VioniaSoft builds reliable software systems for real business environments.",
sub:"We focus on long-term stability and scalable architecture.",
explore:"View Services",

aboutTitle:"About Us",
aboutDesc:"We treat technology as a strategic business asset.",
aboutCards:[
["Business-Oriented","Aligned with real operations"],
["Stable Architecture","Built for long-term use"],
["Scalable Design","Ready for growth"],
["Long-Term Partner","Beyond delivery"]
],

servicesTitle:"Services",
services:[
["💻 Software Development","Custom business systems"],
["📊 IT Consulting","Architecture & strategy"],
["☁️ Cloud","AWS / Azure infrastructure"],
["🚀 Project Management","End-to-end delivery"]
],

contactTitle:"Contact",
contactDesc:"Feel free to contact us anytime.",
form:["Company","Name","Email","Message","Send"]
},

zh:{
nav:["首页","关于我们","服务","联系我们"],
hero:"助力企业实现数字化增长",
desc:"VioniaSoft 为企业提供稳定可靠的软件与 IT 解决方案。",
sub:"专注长期运营与可扩展系统架构。",
explore:"查看服务",

aboutTitle:"关于我们",
aboutDesc:"我们将技术视为业务增长的核心资产。",
aboutCards:[
["业务导向","贴合真实业务场景"],
["稳定可靠","支持长期运营"],
["可扩展设计","支持企业成长"],
["长期合作","不仅是交付"]
],

servicesTitle:"服务",
services:[
["💻 软件开发","定制化系统"],
["📊 IT 咨询","架构与策略"],
["☁️ 云服务","AWS / Azure"],
["🚀 项目管理","全流程支持"]
],

contactTitle:"联系我们",
contactDesc:"欢迎随时与我们取得联系。",
form:["公司","姓名","邮箱","留言","发送"]
},

fr:{
nav:["Accueil","À propos","Services","Contact"],
hero:"Accompagner votre croissance numérique",
desc:"VioniaSoft développe des solutions logicielles fiables.",
sub:"Pensé pour la stabilité et l’évolutivité.",
explore:"Voir les services",

aboutTitle:"À propos",
aboutDesc:"La technologie comme levier stratégique.",
aboutCards:[
["Orienté métier","Aligné sur vos opérations"],
["Fiable","Pensé long terme"],
["Évolutif","Prêt pour la croissance"],
["Partenaire durable","Au-delà du projet"]
],

servicesTitle:"Services",
services:[
["💻 Développement logiciel","Solutions sur mesure"],
["📊 Conseil IT","Architecture & stratégie"],
["☁️ Cloud","AWS / Azure"],
["🚀 Gestion de projet","De bout en bout"]
],

contactTitle:"Contact",
contactDesc:"N’hésitez pas à nous contacter.",
form:["Entreprise","Nom","Email","Message","Envoyer"]
}
};

function setLang(l){
localStorage.setItem("lang", l);

/* NAV */
["navHome","navAbout","navServices","navContact"].forEach((id,i)=>{
  const el=document.getElementById(id);
  if(el) el.innerText=T[l].nav[i];
});

/* TEXT */
document.querySelectorAll("[data-i]").forEach(e=>{
  const key=e.dataset.i;
  if(T[l][key]) e.innerText=T[l][key];
});

/* ABOUT */
const about=document.getElementById("aboutCards");
if(about){
  about.innerHTML="";
  T[l].aboutCards.forEach(c=>{
    about.innerHTML+=`<div class="card"><h3>${c[0]}</h3><p>${c[1]}</p></div>`;
  });
}

/* SERVICES */
const services=document.getElementById("serviceCards");
if(services){
  services.innerHTML="";
  T[l].services.forEach(s=>{
    services.innerHTML+=`<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div>`;
  });
}

/* FORM */
const submit=document.getElementById("submit");
if(submit){
  const f=T[l].form;
  cname.placeholder=f[0];
  pname.placeholder=f[1];
  email.placeholder=f[2];
  msg.placeholder=f[3];
  submit.innerText=f[4];
}
}

window.addEventListener("DOMContentLoaded",()=>{
setLang(localStorage.getItem("lang") || "ko");
});
