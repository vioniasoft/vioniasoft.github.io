/* =========================================================
   Home · Premium Edition
   - 价值标题动画
   - 卡片顺序渐入
   - 客户卡片渐入
   - 指标条渐入
   - CTA 条渐入
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".value-header");
  const cards = document.querySelectorAll(".value-card");

  /* ========== 核心价值 ========== */
  if (header || cards.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        if (entry.target.classList.contains("value-header")) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }

        if (entry.target.classList.contains("value-card")) {
          const index = [...cards].indexOf(entry.target);
          setTimeout(() => entry.target.classList.add("is-visible"), index * 80);
          setTimeout(() => observer.unobserve(entry.target), index * 80 + 600);
        }
      });
    }, { threshold: 0.2 });

    if (header) observer.observe(header);
    cards.forEach(card => observer.observe(card));
  }

  /* ========== 客户卡片渐入 ========== */
  const clientCards = document.querySelectorAll(".client-card");
  if (clientCards.length) {
    const clientObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          clientObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    clientCards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`;
      clientObserver.observe(card);
    });
  }

  /* ========== 指标条渐入 ========== */
  const metricsStats = document.querySelector(".metrics-stats");
  if (metricsStats) {
    const metricsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          metricsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    metricsStats.style.opacity = "0";
    metricsStats.style.transform = "translateY(24px)";
    metricsStats.style.transition = "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s";
    metricsObserver.observe(metricsStats);
  }

  /* ========== CTA 条渐入 ========== */
  const ctaStrip = document.querySelector(".cta-strip-inner");
  if (ctaStrip) {
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          ctaObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    ctaStrip.style.opacity = "0";
    ctaStrip.style.transform = "translateY(20px)";
    ctaStrip.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    ctaObserver.observe(ctaStrip);
  }
});