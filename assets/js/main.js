/* =========================================================
   Language Data（原样保留）
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
    /*form: {
     name: "이름 *",
     email: "이메일 *",
     company: "회사명 (선택)",
     typePlaceholder: "문의 유형을 선택해 주세요 *",
     typeProject: "프로젝트 문의",
     typeConsulting: "기술 상담",
     typePartner: "협업 제안",
     message: "문의 내용을 입력해 주세요 *",
     send: "보내기",
     errRequired: "필수 항목입니다.",
     errEmail: "올바른 이메일 형식이 아닙니다.",
     success: "문의가 성공적으로 전송되었습니다."
   }*/
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
    /*form: {
     name: "Name *",
     email: "Email *",
     company: "Company (optional)",
     typePlaceholder: "Select inquiry type *",
     typeProject: "Project Inquiry",
     typeConsulting: "Consulting",
     typePartner: "Partnership",
     message: "Your message *",
     send: "Send",
     errRequired: "This field is required.",
     errEmail: "Invalid email address.",
     success: "Your message has been sent successfully."
   }*/
  },

  zh: {
    nav: ["首页", "关于我们", "服务", "联系"],
    hero: "助力企业实现可持续的数字化成长",
    desc: "VioniaSoft 是一家专注于为企业真实运营环境设计和构建 IT 与软件解决方案的技术工作室。",
    sub: "我们关注长期稳定运行与可扩展性，而非短期开发。",
    explore: "查看服务",
    aboutTitle: "关于我们",
    aboutDesc: "VioniaSoft 将技术视为企业战略的一部分，而不仅仅是开发工作。",
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
    /*form: {
     name: "姓名 *",
     email: "邮箱 *",
     company: "公司（选填）",
     typePlaceholder: "请选择咨询类型 *",
     typeProject: "项目咨询",
     typeConsulting: "技术咨询",
     typePartner: "合作提案",
     message: "请输入咨询内容 *",
     send: "发送",
     errRequired: "这是必填项。",
     errEmail: "邮箱格式不正确。",
     success: "提交成功，我们会尽快联系您。"
   }*/
  },

  fr: {
    nav: ["Accueil", "À propos", "Services", "Contact"],
    hero: "Accompagner une croissance numérique durable",
    desc: "VioniaSoft est un studio technologique qui conçoit et développe des solutions IT adaptées aux réalités des entreprises.",
    sub: "Nous privilégions la stabilité et l’évolutivité à long terme.",
    explore: "Découvrir nos services",
    aboutTitle: "À propos",
    aboutDesc: "Chez VioniaSoft, la technologie fait partie intégrante de la stratégie d’entreprise.",
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
    /*form: {
     name: "Nom *",
     email: "Email *",
     company: "Entreprise (optionnel)",
     typePlaceholder: "Type de demande *",
     typeProject: "Projet",
     typeConsulting: "Consultation",
     typePartner: "Partenariat",
     message: "Votre message *",
     send: "Envoyer",
     errRequired: "Champ requis.",
     errEmail: "Email invalide.",
     success: "Message envoyé avec succès."
   }*/
  }
};

/* =========================================================
   Helper
========================================================= */
const $ = id => document.getElementById(id);

/* =========================================================
   Language Switch（原逻辑保留）
========================================================= */
function setLang(lang) {
  const t = T[lang];
  if (!t) return;

  localStorage.setItem("lang", lang);
   
  document.querySelectorAll("[data-nav]").forEach((el, i) => {
    const index = i % t.nav.length; // ⭐ 关键
    el.textContent = t.nav[index];
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
   PC Language Menu（原样）
========================================================= */
function toggleLang() {
  const menu = $("langMenu");
  if (menu) {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
}

/* =========================================================
   Mobile Menu（增强：点击空白关闭）
========================================================= */
function toggleMobileMenu() {
  const nav = $("navMobile");
  if (nav) nav.classList.toggle("open");
}

/* =========================================================
   Card Animation（原样）
========================================================= */
let observer;
function observeCards() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("show");
    observer.observe(card);
  });
}

/* =========================================================
   Inject NAV + Sync Language（关键修复）
========================================================= */
fetch("/assets/partials/nav.html")
  .then(res => res.text())
  .then(html => {
    const navRoot = document.getElementById("siteNav");
    if (!navRoot) return;

    navRoot.innerHTML = html;

    // ⚠️ 关键：确保 nav 注入完成后再同步语言（PC + Mobile）
    requestAnimationFrame(() => {
      setLang(localStorage.getItem("lang") || "ko");
    });
  });



// 点击语言后自动关闭（PC）
const _setLang = setLang;
setLang = function (lang) {
  _setLang(lang);

  const menu = document.getElementById("langMenu");
  if (menu) {
    menu.style.display = "none";
  }
};

// 鼠标移出语言区域自动关闭（PC）
document.addEventListener("mouseover", () => {
  const langWrap = document.querySelector(".lang.pc-only");
  const menu = document.getElementById("langMenu");

  if (!langWrap || !menu) return;

  langWrap.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });
});


/* =========================================================
   Mobile Menu Auto Close
========================================================= */
function closeMobileMenu() {
  const nav = document.getElementById("navMobile");
  const langSub = document.getElementById("mobileLangSub");

  if (nav) nav.classList.remove("open");
  if (langSub) langSub.classList.remove("open"); // ⭐ 核心
}

document.addEventListener("click", e => {
  const nav = document.getElementById("navMobile");
  if (!nav || !nav.classList.contains("open")) return;

  // 点在 nav 内部（包括 Language ▶）不关
  if (nav.contains(e.target)) return;

  // 点空白
  closeMobileMenu();
});


/* =========================================================
   Mobile Language Click Auto Close（语言点完即收）
========================================================= */

const _setLangMobile = setLang;
setLang = function (lang) {
  _setLangMobile(lang);

  // 关闭 PC 语言菜单
  const langMenu = document.getElementById("langMenu");
  if (langMenu) langMenu.style.display = "none";

  // 关闭 Mobile 菜单
  const navMobile = document.getElementById("navMobile");
  if (navMobile) navMobile.classList.remove("open");
};

/* =========================================================
   Mobile Language Toggle
========================================================= */
function toggleMobileLang() {
  const title = document.querySelector(".menu-group-title");
  const sub = document.querySelector(".menu-sub");
  if (!title || !sub) return;

  title.classList.toggle("open");
  sub.classList.toggle("open");
}

/* =========================================================
   Mobile Menu Close (统一出口)
========================================================= */
function closeMobileMenu() {
  const nav = document.getElementById("navMobile");
  const langSub = document.getElementById("mobileLangSub");

  if (nav) nav.classList.remove("open");
  if (langSub) langSub.classList.remove("open"); // ⭐ 关键
}

function toggleMobileMenu() {
  const nav = document.getElementById("navMobile");
  if (nav) nav.classList.toggle("open");
}

function toggleMobileLang(e) {
  e.stopPropagation(); // ⭐ 防止 document click
  document
    .getElementById("mobileLangSub")
    ?.classList.toggle("open");
}


/* =========================================================
   Contact Form (Validation + i18n + Success UI)
========================================================= */
/* document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const fields = {
    name: form.querySelector("#name"),
    email: form.querySelector("#email"),
    company: form.querySelector("#company"),
    type: form.querySelector("#type"),
    message: form.querySelector("#message")
  };

  const successMsg = document.getElementById("successMsg");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const lang = localStorage.getItem("lang") || "ko";
    const t = T[lang].form;

    let valid = true;

    // 清空错误
    form.querySelectorAll(".error").forEach(e => (e.textContent = ""));
    successMsg.textContent = "";

    // 必填校验
    ["name", "email", "type", "message"].forEach(key => {
      const input = fields[key];
      const error = input.parentElement.querySelector(".error");

      if (!input.value.trim()) {
        error.textContent = t.errRequired;
        valid = false;
      }
    });

    // Email 格式
    if (
      fields.email.value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value)
    ) {
      fields.email.parentElement.querySelector(".error").textContent =
        t.errEmail;
      valid = false;
    }

    if (!valid) return;

    // 成功 UI
    submitBtn.classList.add("loading");

    setTimeout(() => {
      submitBtn.classList.remove("loading");
      successMsg.textContent = t.success;
      form.reset();
    }, 600);

    // mailto
    const body = encodeURIComponent(
      `Name: ${fields.name.value}
Email: ${fields.email.value}
Company: ${fields.company.value}
Type: ${fields.type.value}

${fields.message.value}`
    );

    window.location.href =
      `mailto:info@vioniasoft.com?subject=Website Inquiry&body=${body}`;
  });
});*/



/* =========================================================
   Contact Form (ONLY if exists)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formNotice = document.getElementById("formNotice");

  if (!contactForm || !formNotice) return;

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const lang = localStorage.getItem("lang") || "ko";
    const t = CF[lang];

    formNotice.textContent = "";
    formNotice.style.color = "#dc2626";

    if (!this.name.value.trim() ||
        !this.email.value.trim() ||
        !this.type.value ||
        !this.message.value.trim()) {
      formNotice.textContent = t.error;
      return;
    }

    const body = encodeURIComponent(
`Name: ${this.name.value}
Email: ${this.email.value}
Company: ${this.company.value || "-"}
Type: ${this.type.options[this.type.selectedIndex].text}

Message:
${this.message.value}`
    );

    formNotice.style.color = "#16a34a";
    formNotice.textContent = t.success;

    window.location.href =
      `mailto:info@vioniasoft.com?subject=Website Inquiry&body=${body}`;
  });
});

