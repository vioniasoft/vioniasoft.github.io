// assets/js/services.js


// document.addEventListener("DOMContentLoaded", () => {
//     const items = document.querySelectorAll(".timeline-item");
  
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.25 });
  
//     items.forEach(el => observer.observe(el));
//   });
  



document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  reveals.forEach(el => observer.observe(el));
});

