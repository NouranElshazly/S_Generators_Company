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
window.addEventListener('beforeunload', function () {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('loadingSpinner').style.display = 'block';
});

window.addEventListener('load', function () {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('loadingSpinner').style.display = 'none';
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetUrl = this.href;

        document.getElementById('overlay').style.display = 'block';
        document.getElementById('loadingSpinner').style.display = 'block';

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500); // set timer for loading pages
    });
});