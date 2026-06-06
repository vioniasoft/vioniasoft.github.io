/* assets/js/contact.js */
/* =========================================================
   Contact 表单逻辑 · 修复下拉菜单
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const btn = document.getElementById("submitBtn");
    const success = document.getElementById("formSuccess");
    const error = document.getElementById("formError");

    const successTitleEl = document.getElementById("successTitle");
    const successDescEl = document.getElementById("successDesc");
    const errorTitleEl = document.getElementById("errorTitle");
    const errorDescEl = document.getElementById("errorDesc");

    if (!form) return;

    const currentLang = localStorage.getItem("lang") || document.documentElement.lang || "ko";

    function getText(path) {
        return path.split(".").reduce((obj, key) => obj && obj[key], window.i18nMessages?.[currentLang]) || "";
    }

    if (successTitleEl) successTitleEl.textContent = getText("contact.successTitle");
    if (successDescEl) successDescEl.textContent = getText("contact.successDesc");
    if (errorTitleEl) errorTitleEl.textContent = getText("contact.errorTitle");
    if (errorDescEl) errorDescEl.textContent = getText("contact.errorDesc");

    /* 表单字段逐个轻入 */
    document.querySelectorAll(".form-row").forEach((row, i) => {
        setTimeout(() => row.classList.add("show"), i * 80);
    });

    /* ===============================
       自定义下拉 · 事件委托修复版
    =============================== */
    const select = document.getElementById("contactTypeSelect");
    const trigger = document.getElementById("contactTypeTrigger");
    const hiddenInput = document.getElementById("contactTypeValue");
    const typeError = document.getElementById("typeError");

    if (trigger && select) {
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            select.classList.toggle("open");
        });

        // 事件委托：监听整个 select 容器
        select.addEventListener("click", (e) => {
            const li = e.target.closest("li");
            if (!li) return;
            trigger.textContent = li.textContent;
            trigger.classList.remove("is-placeholder");
            hiddenInput.value = li.dataset.value;
            if (typeError) typeError.classList.remove("show");
            select.classList.remove("open");
        });
    }

    // 点击外部关闭
    document.addEventListener("click", (e) => {
        if (select && !select.contains(e.target)) {
            select.classList.remove("open");
        }
    });

    /* 错误提示：输入即消失 */
    form.querySelectorAll("input, textarea").forEach(input => {
        input.addEventListener("input", () => {
            const errorEl = input.closest(".form-row")?.querySelector(".field-error");
            if (errorEl) errorEl.classList.remove("show");
        });
    });

    /* 提交 */
    form.addEventListener("submit", async e => {
        e.preventDefault();
        let valid = true;
        const originalText = btn.textContent;

        form.querySelectorAll(".field-error").forEach(el => el.classList.remove("show"));
        if (typeError) typeError.classList.remove("show");

        form.querySelectorAll("[required]").forEach(input => {
            const errorEl = input.closest(".form-row")?.querySelector(".field-error");
            const value = input.value.trim();
            if (!value) {
                if (errorEl) {
                    const msgMap = {
                        name: "contact.form.nameRequired",
                        email: "contact.form.emailRequired",
                        message: "contact.form.messageRequired"
                    };
                    errorEl.textContent = getText(msgMap[input.name] || "contact.form.required");
                    errorEl.classList.add("show");
                }
                valid = false;
                return;
            }
            if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                if (errorEl) {
                    errorEl.textContent = getText("contact.form.emailInvalid");
                    errorEl.classList.add("show");
                }
                valid = false;
            }
        });

        if (!hiddenInput.value) {
            if (typeError) {
                typeError.textContent = getText("contact.form.typeRequired");
                typeError.classList.add("show");
            }
            valid = false;
        }

        if (!valid) return;

        btn.disabled = true;
        btn.textContent = getText("contact.form.sendingTitle") || "전송중...";

        try {
            const formData = new FormData(form);
            const res = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" }
            });
            const result = await res.json().catch(() => null);
            if (!res.ok || !result || result.ok !== true) throw new Error("Formspree submit failed");

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

        } catch (err) {
            console.error("Form submit error:", err);
            error.classList.add("show");
            setTimeout(() => {
                error.classList.remove("show");
                btn.disabled = false;
                btn.textContent = originalText;
            }, 2000);
        }
    });
});