const T = {
  ko: {
    nav: ["홈", "회사소개", "서비스", "문의"],

    hero: "기업의 디지털 성장을 함께합니다",
    desc: "비오니아소프트는 기업을 위한 IT 및 소프트웨어 솔루션을 설계·개발·운영하는 전문 스튜디오입니다.",
    sub: "우리는 단기적인 개발이 아닌, 실제 비즈니스 환경에서 안정적으로 운영될 수 있는 시스템을 만듭니다.",
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
    contactDesc: "프로젝트 제안, 기술 상담, 협업 문의 등 언제든지 편하게 연락해 주세요.",
    form: ["회사명", "담당자 이름", "이메일", "문의 내용", "문의 보내기"]
  },

  en: {
    nav: ["Home", "About", "Services", "Contact"],

    hero: "Supporting Sustainable Digital Growth",
    desc: "VioniaSoft is an IT & software studio delivering reliable systems for businesses.",
    sub: "We focus on long-term stability, scalability, and real operational needs.",
    explore: "View Services",

    aboutTitle: "About Us",
    aboutDesc: "We approach technology as a strategic business asset, not just a development task.",

    aboutCards: [
      ["Business-Oriented", "Technology aligned with operations"],
      ["Stable & Scalable", "Designed for long-term use"],
      ["Clear Communication", "Transparent process"],
      ["Long-Term Partner", "Beyond project delivery"]
    ],

    servicesTitle: "Services",
    services: [
      ["💻 Software Development", "Custom business systems"],
      ["📊 IT Consulting", "Architecture & strategy"],
      ["☁️ Cloud Solutions", "Infrastructure & operations"],
      ["🚀 Project Management", "End-to-end delivery"]
    ],

    contactTitle: "Contact / Inquiry",
    contactDesc: "Let’s discuss your project or collaboration.",
    form: ["Company", "Name", "Email", "Message", "Send Inquiry"]
  }
};

/* ===== Language Switch ===== */
function setLang(lang) {
  localStorage.setItem("lang", lang);
  const t = T[lang];

  document.querySelectorAll("[data-nav]").forEach((el, i) => {
    el.textContent = t.nav[i];
  });

  // Hero
  if (window.heroTitle) {
    heroTitle.textContent = t.hero;
    heroDesc.textContent = t.desc;
    if (window.heroSub) heroSub.textContent = t.sub;
    heroBtn.textContent = t.explore; // ✅ 修正点
  }

  // About
  if (window.aboutCards) {
    aboutTitle.textContent = t.aboutTitle;
    aboutDesc.textContent = t.aboutDesc;
    aboutCards.innerHTML = "";

    t.aboutCards.forEach(c => {
      aboutCards.innerHTML += `
        <div class="card">
          <h3>${c[0]}</h3>
          <p>${c[1]}</p>
        </div>`;
    });

    observeCards();
  }

  // Services
  if (window.servicesCards) {
    servicesTitle.textContent = t.servicesTitle;
    servicesCards.innerHTML = "";

    t.services.forEach(s => {
      servicesCards.innerHTML += `
        <div class="card">
          <h3>${s[0]}</h3>
          <p>${s[1]}</p>
        </div>`;
    });

    observeCards();
  }

  // Contact
  if (window.contactTitle) {
    contactTitle.textContent = t.contactTitle;
    contactDesc.textContent = t.contactDesc;
  }
}

/* ===== Language Menu ===== */
function toggleLang() {
  const menu = document.getElementById("langMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* ===== Card Scroll Animation ===== */
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

/* ===== Init ===== */
window.onload = () => {
  setLang(localStorage.getItem("lang") || "ko");
};
