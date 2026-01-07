/* assets/js/contact.js */
/* =========================================================
   Contact 表单逻辑（完整最终版 · 不删功能 · UX 正确）
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       基础元素
    =============================== */
    const form = document.getElementById("contactForm");
    const btn = document.getElementById("submitBtn");
    const success = document.getElementById("formSuccess");
    const error = document.getElementById("formError");
  
    const successTitleEl = document.getElementById("successTitle");
    const successDescEl = document.getElementById("successDesc");
    const errorTitleEl = document.getElementById("errorTitle");
    const errorDescEl = document.getElementById("errorDesc");
  
    if (!form) return;
  
    /* ===============================
       🌍 当前语言 & i18n 文案函数（恢复）
    =============================== */
    const currentLang =
      localStorage.getItem("lang") ||
      document.documentElement.lang ||
      "ko";
  
    function getText(path) {
      return path.split(".").reduce((obj, key) => {
        return obj && obj[key];
      }, window.i18nMessages?.[currentLang]) || "";
    }
  
    /* ===============================
       页面加载时注入弹层文案（恢复）
    =============================== */
    if (successTitleEl) successTitleEl.textContent = getText("contact.successTitle");
    if (successDescEl) successDescEl.textContent = getText("contact.successDesc");
    if (errorTitleEl) errorTitleEl.textContent = getText("contact.errorTitle");
    if (errorDescEl) errorDescEl.textContent = getText("contact.errorDesc");
  
    /* ===============================
       ✨ 表单字段逐个轻入（配合 CSS）
    =============================== */
    document.querySelectorAll(".form-row").forEach((row, i) => {
      setTimeout(() => row.classList.add("show"), i * 80);
    });
  
    /* ===============================
       🔥 自定义咨询类型下拉（完整恢复）
    =============================== */
    const select = document.getElementById("contactTypeSelect");
    const trigger = document.getElementById("contactTypeTrigger");
    const options = select?.querySelectorAll(".select-options li");
    const hiddenInput = document.getElementById("contactTypeValue");
    const typeError = document.getElementById("typeError");
  
    trigger?.addEventListener("click", () => {
      select.classList.toggle("open");
    });
  
    options?.forEach(option => {
      option.addEventListener("click", () => {
        trigger.textContent = option.textContent;
        trigger.classList.remove("is-placeholder");
        hiddenInput.value = option.dataset.value;
        typeError?.classList.remove("show");
        select.classList.remove("open");
      });
    });
  
    document.addEventListener("click", e => {
      if (select && !select.contains(e.target)) {
        select.classList.remove("open");
      }
    });
  
    /* ===============================
       ✅ 错误提示：输入即消失（UX 正确）
    =============================== */
    form.querySelectorAll("input, textarea").forEach(input => {
      input.addEventListener("input", () => {
        const errorEl = input.closest(".form-row")?.querySelector(".field-error");
        if (errorEl) errorEl.classList.remove("show");
      });
    });
  
    /* ===============================
       表单校验 + 提交（保留你原逻辑）
    =============================== */
    form.addEventListener("submit", async e => {
      e.preventDefault();
  
      let valid = true;
      const originalText = btn.textContent;
  
      // 清空错误
      form.querySelectorAll(".field-error").forEach(el => el.classList.remove("show"));
      typeError?.classList.remove("show");
  
      /* 必填校验 */
      form.querySelectorAll("[required]").forEach(input => {
        const errorEl = input.closest(".form-row")?.querySelector(".field-error");
  
        if (!input.value.trim()) {
          if (errorEl) {
            switch (input.name) {
              case "name":
                errorEl.textContent = getText("contact.form.nameRequired");
                break;
              case "email":
                errorEl.textContent = getText("contact.form.emailRequired");
                break;
              case "message":
                errorEl.textContent = getText("contact.form.messageRequired");
                break;
              default:
                errorEl.textContent = getText("contact.form.required");
            }
            errorEl.classList.add("show");
          }
          valid = false;
        }
  
        if (input.type === "email") {
          const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailReg.test(input.value.trim())) {
            if (errorEl) {
              errorEl.textContent = getText("contact.form.emailInvalid");
              errorEl.classList.add("show");
            }
            valid = false;
          }
        }
      });
  
      /* 咨询类型必选 */
      if (!hiddenInput.value) {
        typeError.textContent = getText("contact.form.typeRequired");
        typeError.classList.add("show");
        valid = false;
      }
  
      if (!valid) return;
  
      /* 提交 */
      btn.disabled = true;
      btn.textContent = getText("contact.form.sendingTitle") || "전송중...";
  
      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
  
        if (!res.ok) throw new Error();
  
        success.classList.add("show");
   
        form.reset();
        hiddenInput.value = "";
        trigger.textContent = trigger.dataset.placeholder;
        trigger.classList.add("is-placeholder");
  
        setTimeout(() => {
          success.classList.remove("show");
          btn.disabled = false;
          btn.textContent = originalText;
        }, 2000);
  
      } catch {
        error.classList.add("show");
        setTimeout(() => {
          error.classList.remove("show");
          btn.disabled = false;
          btn.textContent = originalText;
        }, 2000);
      }
    });
  
  });
  