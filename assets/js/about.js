/* =========================================================
   About 页面滚动动画
========================================================= */
// assets/js/about.js
document.addEventListener("DOMContentLoaded", () => {
    // 页面所有 .reveal 元素滚动出现
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);// 只触发一次
            }
        });
    }, { threshold: 0.2 });// 20% 进入视口触发

    items.forEach(el => observer.observe(el));

});








/* =========================================================
   JS: 滚动触发动画
========================================================= */
// document.addEventListener("DOMContentLoaded", function() {
//     const scrollElements = document.querySelectorAll(".animate-on-scroll");

//     const elementInView = (el, offset = 0) => {
//         const elementTop = el.getBoundingClientRect().top;
//         return (
//             elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
//         );
//     };

//     const displayScrollElement = (element) => {
//         element.classList.add("show");
//     };

//     const hideScrollElement = (element) => {
//         element.classList.remove("show");
//     };

//     const handleScrollAnimation = () => {
//         scrollElements.forEach((el) => {
//             if (elementInView(el, 60)) {
//                 displayScrollElement(el);
//             }
//         });
//     };

//     window.addEventListener("scroll", handleScrollAnimation);
//     handleScrollAnimation(); // 页面加载时检查
// });




// assets/js/about.js
// =========================================================
// About 页面 JS
// 功能：
// 1. reveal 动画
// 2. 下半椭圆布局部门卡片
// 3. SVG 连接线沿半圆连接创始人和部门
// 下半圆组织架构布局 + SVG 连接线
// =========================================================

// document.addEventListener("DOMContentLoaded", () => {

//     // =========================
//     // 1. reveal 动画
//     // =========================
//     const items = document.querySelectorAll(".reveal");
//     const observer = new IntersectionObserver(
//         entries => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("active");
//                     observer.unobserve(entry.target);
//                 }
//             });
//         },
//         { threshold: 0.2 }
//     );
//     items.forEach(el => observer.observe(el));

//     // =========================
//     // 2. 下半圆布局部门卡片
//     // =========================
//     const deptItems = document.querySelectorAll(".org-dept-ellipse-item"); // 部门卡片
//     const svgPath = document.querySelector(".dept-lines .line");           // SVG 路径

//     const containerWidth = 820;   // 容器宽度
//     const containerHeight = 250;  // 容器高度

//     const centerX = containerWidth / 2; // 水平中心点 X
//     const rx = 350;  // 半椭圆水平半径
//     const ry = 120;  // 半椭圆垂直半径

//     // =========================
//     // 关键修正：下半圆中心 Y
//     // 下半圆椭圆公式：y = centerY + ry * sin(θ)
//     // centerY = 顶部到椭圆中心的 Y 坐标
//     // 为了让部门在创始人下方，需要把 centerY 设置在创始人正下方偏下
//     // =========================
//     const founder = document.querySelector(".org-founder-center");
//     const founderRect = founder.getBoundingClientRect();
//     const founderHeight = founder.offsetHeight;

//     const topOffset = 30;                   // 整个半椭圆距离容器顶部
//     const centerY = topOffset + ry + founderHeight / 2; // 下半圆中心 Y

//     const founderX = centerX;                   // 创始人水平居中
//     const founderY = topOffset + founderHeight; // 创始人底部 Y 坐标

//     // 下半圆角度 210° → 330°（保证部门在创始人下方）
//     const startAngle = 210;
//     const endAngle = 330;
//     const deg2rad = Math.PI / 180;

//     const pathPoints = [];

//     deptItems.forEach((el, i) => {
//         // 计算角度
//         const angle = startAngle + (endAngle - startAngle) * (i / (deptItems.length - 1));
//         const rad = angle * deg2rad;

//         // 半椭圆公式：x = cx + rx*cos(θ), y = cy + ry*sin(θ)
//         const x = centerX + rx * Math.cos(rad);
//         const y = centerY + ry * Math.sin(rad);

//         // 中间两个部门往下
//         if (i === 1 || i === 2) {
//             y += 10; // 调整值可以微调
//         }

//         // 设置部门卡片位置
//         el.style.left = `${x}px`;
//         el.style.top = `${y}px`;
//         el.style.transform = `translate(-50%, -50%)`;

//         pathPoints.push([x, y]);
//     });

//     // =========================
//     // 3. SVG 连接线
//     // 从创始人底部开始，依次通过部门沿下半圆连接
//     // =========================
//     let d = `M ${founderX},${founderY}`;
//     pathPoints.forEach(([x, y]) => {
//         const midX = (founderX + x) / 2; // 控制点 X：起点和目标点中点
//         const midY = (founderY + y) / 2; // 控制点 Y
//         d += ` Q ${midX},${midY} ${x},${y}`; // 二次贝塞尔曲线
//     });

//     svgPath.setAttribute("d", d);

// });
