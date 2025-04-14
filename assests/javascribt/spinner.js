// document.addEventListener("DOMContentLoaded", function () {
//     let overlay = document.getElementById("overlay");
//     let spinner = document.getElementById("loadingSpinner");

//     // التأكد من أن العناصر موجودة
//     if (!overlay || !spinner) return;

//     document.body.addEventListener("click", function (event) {
//         let link = event.target.closest("a"); // العثور على الرابط الذي تم النقر عليه

//         if (link && link.href && !link.href.includes("#") && link.target !== "_blank") {
//             event.preventDefault(); // منع الانتقال الفوري
//             let targetUrl = link.href; // حفظ الرابط المستهدف

//             // التأكد من أن الرابط داخلي (نفس الدومين)
//             if (window.location.origin === new URL(targetUrl).origin) {
//                 // عرض الخلفية والسبنر
//                 overlay.classList.add("show");
//                 spinner.classList.add("show");

//                 // الانتقال إلى الصفحة بعد 1 ثانية
//                 setTimeout(() => {
//                     window.location.href = targetUrl;
//                 }, 1000);
//             }
//         }
//     });
// });
