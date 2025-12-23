/* ================= Helpers ================= */
const $ = id => document.getElementById(id);

/* ================= Language ================= */
function setLang(lang) {
  const t = T[lang];
  if (!t) return;

  localStorage.setItem("lang", lang);

  /* ===== PC NAV ===== */
  document.querySelectorAll(".nav-center [data-nav]").forEach((el, i) => {
    el.textContent = t.nav[i] || "";
  });

  /* ===== MOBILE NAV ===== */
  document.querySelectorAll(".nav-dropdown .m-nav").forEach((el, i) => {
    el.textContent = t.nav[i] || "";
  });

  /* ===== Page Content ===== */
  if ($("heroTitle")) {
    heroTitle.textContent = t.hero;
    heroDesc.textContent = t.desc;
    if (heroSub) heroSub.textContent = t.sub;
    if (heroBtn) heroBtn.textContent = t.explore;
  }

  if ($("aboutTitle")) {
    aboutTitle.textContent = t.aboutTitle;
    aboutDesc.textContent = t.aboutDesc;
  }

  if ($("servicesTitle")) {
    servicesTitle.textContent = t.servicesTitle;
  }

  if ($("contactTitle")) {
    contactTitle.textContent = t.contactTitle;
    contactDesc.textContent = t.contactDesc;
  }
}

/* ================= Menus ================= */
function toggleLang() {
  $("langMenu")?.classList.toggle("show");
}

function toggleMobileMenu() {
  $("navMobile")?.classList.toggle("open");
}

/* ===== Mobile Language Toggle ===== */
function toggleMobileLang() {
  $("mobileLang")?.classList.toggle("open");
}

/* ===== Click outside to close ===== */
document.addEventListener("click", e => {
  const nav = $("navMobile");
  if (!nav) return;

  if (!nav.contains(e.target)) {
    nav.classList.remove("open");
    $("mobileLang")?.classList.remove("open");
  }
});

/* ================= Init ================= */
window.addEventListener("DOMContentLoaded", () => {
  fetch("/assets/partials/nav.html")
    .then(res => res.text())
    .then(html => {
      $("siteNav").innerHTML = html;
      setLang(localStorage.getItem("lang") || "ko");
    });
});
