// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
    // Load cover section background
    setTimeout(() => {
        document.querySelector('.cover-section')?.classList.add('loaded');
    }, 100);

    // Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Defer non-critical resources
    const deferScripts = () => {
        const scripts = document.querySelectorAll('script[defer]');
        scripts.forEach(script => {
            setTimeout(() => {
                const newScript = document.createElement('script');
                newScript.src = script.src;
                document.body.appendChild(newScript);
                script.remove();
            }, 2000);
        });
    };

    window.addEventListener('load', deferScripts);
});
