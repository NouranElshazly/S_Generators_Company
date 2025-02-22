document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // automatic scroll 
        pagination: {
            el: '.swiper-pagination',
            clickable: true, //bullets clickable
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 10000, // automatic scroll time
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
    const whyusSection = document.querySelector(".whyus");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        },
        { threshold: 0.5 } // عندما يكون 50% من السكشن مرئيًا
    );
    observer.observe(whyusSection);
});
