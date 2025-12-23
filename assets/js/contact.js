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
    success: "메일 앱이 열립니다. 문의 감사합니다."
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
    success: "Your email client will open shortly."
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
    success: "即将为您打开邮箱应用。"
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
    success: "Votre client mail va s’ouvrir."
  }
};

/* =========================================================
   Init
========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  applyContactLang(localStorage.getItem("lang") || "ko");

  document.addEventListener("lang:changed", e => {
    applyContactLang(e.detail);
  });

  form.addEventListener("submit", handleSubmit);
});

/* =========================================================
   Apply Language
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
   Submit Handler
========================================================= */
function handleSubmit(e) {
  e.preventDefault();

  const lang = localStorage.getItem("lang") || "ko";
  const t = CF[lang];

  clearErrors();
  formNotice.textContent = "";

  let hasError = false;

  if (!fName.value.trim()) {
    showError(fName, t.errors.name);
    hasError = true;
  }

  if (!fEmail.value.trim()) {
    showError(fEmail, t.errors.email);
    hasError = true;
  }

  if (!fType.value) {
    showError(fType, t.errors.type);
    hasError = true;
  }

  if (!fMessage.value.trim()) {
    showError(fMessage, t.errors.message);
    hasError = true;
  }

  if (hasError) return;

  /* ===== Loading ===== */
  fSubmit.classList.add("loading");
  fSubmit.disabled = true;

  const body = encodeURIComponent(
`Name: ${fName.value}
Email: ${fEmail.value}
Company: ${fCompany.value || "-"}
Type: ${fType.options[fType.selectedIndex].text}

Message:
${fMessage.value}`
  );

  /* ===== Fake delay for UX ===== */
  setTimeout(() => {
    fSubmit.classList.remove("loading");
    fSubmit.disabled = false;

    document.getElementById("successCard").style.display = "block";
    document.querySelector(".success-text").textContent = t.success;

    window.location.href =
      `mailto:info@vioniasoft.com?subject=Website Inquiry&body=${body}`;
  }, 800);
}


/* =========================================================
   Error Helpers
========================================================= */
function showError(input, msg) {
  const err = input.parentElement.querySelector(".field-error");
  if (err) err.textContent = msg;
}

function clearErrors() {
  document.querySelectorAll(".field-error").forEach(el => {
    el.textContent = "";
  });
}


/* =========================================================
   Contact Form – Real API (Formspree)
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const submitBtn = document.getElementById("fSubmit");
  const notice = document.getElementById("formNotice");

  const FORM_ENDPOINT = "https://formspree.io/f/abcdwxyz"; 
  // ↑↑↑ 换成你自己的 Formspree 地址

  form.addEventListener("submit", async e => {
    e.preventDefault();
    notice.textContent = "";

    // loading 状态
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        // ✅ 成功
        notice.textContent = "문의가 성공적으로 전송되었습니다.";
        notice.style.color = "#16a34a";

        // ✅ 清空表单
        form.reset();

        // 小动画
        form.classList.add("form-success");
        setTimeout(() => form.classList.remove("form-success"), 1200);
      } else {
        throw new Error("Submit failed");
      }
    } catch (err) {
      notice.textContent = "전송 중 오류가 발생했습니다. 다시 시도해 주세요.";
      notice.style.color = "#dc2626";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "문의 보내기";
    }
  });
});
