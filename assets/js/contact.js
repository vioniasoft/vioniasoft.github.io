/* =========================================================
   Contact Form i18n
========================================================= */
const CF = {
  ko: {
    name: "이름 *",
    email: "이메일 *",
    company: "회사명 (선택)",
    typePlaceholder: "문의 유형을 선택해 주세요 *",
    types: ["프로젝트 제안", "기술 상담", "협업 / 파트너십", "기타"],
    message: "문의 내용을 입력해 주세요 *",
    submit: "문의 보내기",
    errors: {
      name: "이름을 입력해 주세요.",
      email: "이메일을 입력해 주세요.",
      type: "문의 유형을 선택해 주세요.",
      message: "문의 내용을 입력해 주세요."
    },
    success: "문의가 성공적으로 전송되었습니다."
  },

  en: {
    name: "Name *",
    email: "Email *",
    company: "Company (optional)",
    typePlaceholder: "Select inquiry type *",
    types: ["Project Proposal", "Technical Consulting", "Partnership", "Other"],
    message: "Please describe your inquiry *",
    submit: "Send Inquiry",
    errors: {
      name: "Please enter your name.",
      email: "Please enter your email.",
      type: "Please select inquiry type.",
      message: "Please enter your message."
    },
    success: "Your inquiry has been sent successfully."
  },

  zh: {
    name: "姓名 *",
    email: "邮箱 *",
    company: "公司名（选填）",
    typePlaceholder: "请选择咨询类型 *",
    types: ["项目提案", "技术咨询", "合作 / 伙伴关系", "其他"],
    message: "请输入咨询内容 *",
    submit: "发送咨询",
    errors: {
      name: "请输入姓名。",
      email: "请输入邮箱。",
      type: "请选择咨询类型。",
      message: "请输入咨询内容。"
    },
    success: "您的咨询已成功发送。"
  },

  fr: {
    name: "Nom *",
    email: "Email *",
    company: "Entreprise (optionnel)",
    typePlaceholder: "Type de demande *",
    types: ["Proposition de projet", "Conseil technique", "Partenariat", "Autre"],
    message: "Décrivez votre demande *",
    submit: "Envoyer la demande",
    errors: {
      name: "Veuillez saisir votre nom.",
      email: "Veuillez saisir votre email.",
      type: "Veuillez sélectionner un type.",
      message: "Veuillez saisir votre message."
    },
    success: "Votre demande a été envoyée avec succès."
  }
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* =========================================================
   Init
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  applyContactLang(localStorage.getItem("lang") || "ko");
  document.getElementById("contactForm").addEventListener("submit", handleSubmit);
});

/* =========================================================
   Language Apply（不改 setLang）
========================================================= */
function applyContactLang(lang) {
  const t = CF[lang] || CF.ko;

  fName.placeholder = t.name;
  fEmail.placeholder = t.email;
  fCompany.placeholder = t.company;
  fMessage.placeholder = t.message;
  fSubmit.textContent = t.submit;

  const opts = fType.querySelectorAll("option");
  opts[0].textContent = t.typePlaceholder;
  t.types.forEach((txt, i) => (opts[i + 1].textContent = txt));
}

/* =========================================================
   Submit
========================================================= */
function handleSubmit(e) {
  e.preventDefault();
  clearErrors();

  const lang = localStorage.getItem("lang") || "ko";
  const t = CF[lang];
  let hasError = false;

  if (!fName.value.trim()) { showError(fName, t.errors.name); hasError = true; }
  if (!fEmail.value.trim()) {
     showError(fEmail, t.errors.email);
     hasError = true;
   } else if (!isValidEmail(fEmail.value.trim())) {
     showError(
       fEmail,
       lang === "ko"
         ? "이메일 형식이 올바르지 않습니다. (예: example@domain.com)"
         : lang === "en"
         ? "Please enter a valid email address."
         : lang === "zh"
         ? "请输入正确的邮箱格式。"
         : "Veuillez saisir une adresse email valide."
     );
     hasError = true;
   }

  if (!fType.value) { showError(fType, t.errors.type); hasError = true; }
  if (!fMessage.value.trim()) { showError(fMessage, t.errors.message); hasError = true; }

  if (hasError) return;

  // loading
  fSubmit.disabled = true;
  fSubmit.textContent = "Sending...";

  setTimeout(() => {
    formNotice.textContent = t.success;
    formNotice.style.color = "#16a34a";

    document.getElementById("contactForm").reset();

    fSubmit.disabled = false;
    fSubmit.textContent = t.submit;
  }, 800);
}

/* =========================================================
   Helpers
========================================================= */
/* function showError(input, msg) {
  input.closest(".field").querySelector(".field-error").textContent = msg;
}*/
function showError(el, msg) {
  let field = el.closest(".field");

  // 兜底（防止某些浏览器 select / textarea 失效）
  if (!field) {
    field = el.parentElement;
  }

  const err = field.querySelector(".field-error");
  if (err) err.textContent = msg;
}


function clearErrors() {
  document.querySelectorAll(".field-error").forEach(e => e.textContent = "");
}


