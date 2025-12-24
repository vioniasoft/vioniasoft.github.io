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

/* =========================================================
   Utils
========================================================= */
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
   Language Apply
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
   Submit → Formspree
========================================================= */
async function handleSubmit(e) {
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
        : lang === "zh"
        ? "请输入正确的邮箱格式。"
        : lang === "fr"
        ? "Veuillez saisir une adresse email valide."
        : "Please enter a valid email address."
    );
    hasError = true;
  }

  if (!fType.value) { showError(fType, t.errors.type); hasError = true; }
  if (!fMessage.value.trim()) { showError(fMessage, t.errors.message); hasError = true; }

  if (hasError) return;

  /* ===== Loading ===== */
  fSubmit.disabled = true;
  fSubmit.textContent = "Sending...";

  const FORM_ENDPOINT = "https://formspree.io/f/mjgbzana"; // ← 换成你的

  const formData = new FormData(document.getElementById("contactForm"));

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (!res.ok) throw new Error();

    formNotice.textContent = t.success;
    formNotice.style.color = "#16a34a";
    document.getElementById("contactForm").reset();

  } catch {
    formNotice.textContent = "전송 중 오류가 발생했습니다.";
    formNotice.style.color = "#dc2626";
  } finally {
    fSubmit.disabled = false;
    fSubmit.textContent = t.submit;
  }
}

/* =========================================================
   Helpers
========================================================= */
function showError(el, msg) {
  const err = el.parentElement.querySelector(".field-error");
  if (err) err.textContent = msg;
}

function clearErrors() {
  document.querySelectorAll(".field-error").forEach(e => e.textContent = "");
}
