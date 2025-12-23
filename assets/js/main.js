/* =========================================================
   Language Data（原样保留 + 稳定化）
========================================================= */
const T = {
  ko: {
    nav: ["홈", "회사소개", "서비스", "문의"],
    hero: "기업의 디지털 성장을 함께합니다",
    desc: "비오니아소프트는 기업의 실제 운영 환경에 맞는 IT·소프트웨어 솔루션을 설계하고 구축하는 기술 스튜디오입니다.",
    sub: "단기 개발이 아닌, 안정적인 운영과 확장을 전제로 한 시스템을 만듭니다.",
    explore: "서비스 알아보기",
    aboutTitle: "회사 소개",
    aboutDesc:
      "비오니아소프트는 기술을 단순한 개발 작업이 아닌, 비즈니스 전략의 일부로 접근합니다. " +
      "고객의 조직 구조, 운영 방식, 성장 목표를 이해한 후 가장 현실적인 솔루션을 제안합니다.",
    aboutCards: [
      ["비즈니스 중심 사고", "기술보다 비즈니스 흐름을 우선적으로 고려합니다."],
      ["안정성과 확장성", "장기 운영을 전제로 한 구조를 설계합니다."],
      ["명확한 커뮤니케이션", "과정과 결과를 투명하게 공유합니다."],
      ["지속적인 파트너십", "프로젝트 이후에도 함께 개선해 나갑니다."]
    ],
    servicesTitle: "서비스",
    services: [
      ["💻 맞춤형 소프트웨어 개발", "업무 프로세스에 맞춘 웹 시스템, 내부 관리 시스템, 플랫폼 개발"],
      ["📊 IT 컨설팅", "기존 시스템 분석, 기술 전략 수립, 구조 개선 제안"],
      ["☁️ 클라우드 솔루션", "AWS, Azure 기반 인프라 설계 및 안정적인 운영 지원"],
      ["🚀 프로젝트 관리", "기획부터 개발, 배포, 유지보수까지 전 과정 관리"]
    ],
    contactTitle: "문의하기",
    contactDesc: "프로젝트 제안, 기술 상담, 협업 문의 등 언제든지 편하게 연락해 주세요."
  },

  en: {
    nav: ["Home", "About", "Services", "Contact"],
    hero: "Supporting Sustainable Digital Growth",
    desc: "VioniaSoft is a technology studio that designs and builds IT and software solutions tailored to real business operations.",
    sub: "We focus on long-term stability and scalability — not short-term development.",
    explore: "View Services",
    aboutTitle: "About Us",
    aboutDesc:
      "At VioniaSoft, we treat technology as part of business strategy rather than a simple development task.",
    aboutCards: [
      ["Business-Oriented", "Technology aligned with real operations"],
      ["Stable & Scalable", "Designed for long-term growth"],
      ["Clear Communication", "Transparent process and delivery"],
      ["Long-Term Partner", "Continuous collaboration beyond launch"]
    ],
    servicesTitle: "Services",
    services: [
      ["💻 Software Development", "Custom web systems, internal tools, and platforms"],
      ["📊 IT Consulting", "System analysis, architecture, and technical strategy"],
      ["☁️ Cloud Solutions", "AWS & Azure based infrastructure and operations"],
      ["🚀 Project Management", "End-to-end delivery from planning to maintenance"]
    ],
    contactTitle: "Contact",
    contactDesc: "Feel free to reach out for project inquiries or collaboration."
  },

  zh: {
    nav: ["首页", "关于我们", "服务", "联系"],
    hero: "助力企业实现可持续的数字化成长",
    desc: "VioniaSoft 是一家专注于为企业真实运营环境设计和构建 IT 与软件解决方案的技术工作室。",
    sub: "我们关注长期稳定运行与可扩展性，而非短期开发。",
    explore: "查看服务",
    aboutTitle: "关于我们",
    aboutDesc:
      "VioniaSoft 将技术视为企业战略的一部分，而不仅仅是开发工作。",
    aboutCards: [
      ["以业务为核心", "技术服务于真实业务流程"],
      ["稳定与扩展", "面向长期运营的系统设计"],
      ["透明沟通", "过程与结果清晰可见"],
      ["长期合作", "项目交付后的持续支持"]
    ],
    servicesTitle: "服务",
    services: [
      ["💻 定制软件开发", "企业系统、内部管理工具及平台开发"],
      ["📊 IT 咨询", "系统分析、技术架构与策略制定"],
      ["☁️ 云解决方案", "基于 AWS / Azure 的云架构与运维支持"],
      ["🚀 项目管理", "从规划到运维的全流程管理"]
    ],
    contactTitle: "联系我们",
    contactDesc: "欢迎随时联系我们洽谈项目或合作。"
  },

  fr: {
    nav: ["Accueil", "À propos", "Services", "Contact"],
    hero: "Accompagner une croissance numérique durable",
    desc: "VioniaSoft est un studio technologique qui conçoit et développe des solutions IT adaptées aux réalités des entreprises.",
    sub: "Nous privilégions la stabilité et l’évolutivité à long terme.",
    explore: "Découvrir nos services",
    aboutTitle: "À propos",
    aboutDesc:
      "Chez VioniaSoft, la technologie fait partie intégrante de la stratégie d’entreprise.",
    aboutCards: [
      ["Vision métier", "La technologie au service des opérations"],
      ["Stable et évolutif", "Pensé pour le long terme"],
      ["Communication claire", "Processus transparent"],
      ["Partenariat durable", "Collaboration continue après livraison"]
    ],
    servicesTitle: "Services",
    services: [
      ["💻 Développement logiciel", "Systèmes sur mesure et plateformes métiers"],
      ["📊 Conseil IT", "Analyse et stratégie technique"],
      ["☁️ Solutions cloud", "Infrastructure AWS / Azure"],
      ["🚀 Gestion de projet", "Pilotage de bout en bout"]
    ],
    contactTitle: "Contact",
    contactDesc: "Contactez-nous pour discuter de votre projet ou d’une collaboration."
  }
};

/* =========================================================
   Safe DOM Helper
========================================================= */
const $ = id => document.getElementById(id);

/* =========================================================
   Language Switch（原功能完整保留）
========================================================= */
function setLang(lang) {
  const t = T[lang];
  if (!t) return;

  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-nav]").forEach((el, i) => {
    if (t.nav[i]) el.textContent = t.nav[i];
  });

  if ($("heroTitle")) {
    $("heroTitle").textContent = t.hero;
    $("heroDesc").textContent = t.desc;
    if ($("heroSub")) $("heroSub").textContent = t.sub;
    if ($("heroBtn")) $("heroBtn").textContent = t.explore;
  }

  if ($("aboutTitle")) {
    $("aboutTitle").textContent = t.aboutTitle;
    $("aboutDesc").textContent = t.aboutDesc;
    const wrap = $("aboutCards");
    if (wrap) {
      wrap.innerHTML = "";
      t.aboutCards.forEach(c => {
        wrap.innerHTML += `<div class="card"><h3>${c[0]}</h3><p>${c[1]}</p></div>`;
      });
      observeCards();
    }
  }

  if ($("servicesTitle")) {
    $("servicesTitle").textContent = t.servicesTitle;
    const wrap = $("servicesCards");
    if (wrap) {
      wrap.innerHTML = "";
      t.services.forEach(s => {
        wrap.innerHTML += `<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div>`;
      });
      observeCards();
    }
  }

  if ($("contactTitle")) {
    $("contactTitle").textContent = t.contactTitle;
    $("contactDesc").textContent = t.contactDesc;
  }
}

/* =========================================================
   Language Menu
========================================================= */
function toggleLang() {
  const menu = $("langMenu");
  if (menu) menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* =========================================================
   Mobile Menu（新增，不影响原功能）
========================================================= */
function toggleMenu() {
  const menu = $("mobileMenu");
  if (menu) menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* =========================================================
   Card Scroll Animation（原样保留）
========================================================= */
let observer;

function observeCards() {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("show");
    observer.observe(card);
  });
}

/* =========================================================
   Init
========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang") || "ko");
});

/* ===== Inject NAV ===== */
fetch("/assets/partials/nav.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("siteNav").innerHTML = html;
    setLang(localStorage.getItem("lang") || "ko");
  });
