document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 10000,
        },
        on: {
            slideChangeTransitionStart: function () {
                document.querySelectorAll('.slide-text').forEach(text => {
                    text.style.opacity = 0;
                });
            },
            slideChangeTransitionEnd: function () {
                const activeSlide = document.querySelector('.swiper-slide-active .slide-text');
                if (activeSlide) {
                    activeSlide.style.opacity = 1;
                }
            }
        }
    });
});
 
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // منع التنقل المباشر
            let targetUrl = this.href; // حفظ الرابط المستهدف

            // عرض السبنر والخلفية
            document.getElementById("overlay").classList.add("show");
            document.getElementById("loadingSpinner").classList.add("show");

            // تأخير بسيط جدًا لإعطاء إحساس بالسلاسة
            setTimeout(function () {
                window.location.href = targetUrl;
            }, 700); // ⏳ تقليل الوقت إلى 0.7 ثانية لسرعة التحميل
        });
    });
});

 