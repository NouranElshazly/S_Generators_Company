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
            }, 0);      
        });
    };

    window.addEventListener('load', deferScripts);
});

// Ensure that language switch doesn't disrupt lazy loading
function updateLazyImagesForLanguage() {
    // When the language is switched, you may want to re-initialize image lazy loading if the images change.
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        // If necessary, re-set the data-src attribute for the language change
        // Example: img.dataset.src = getNewImageSrcForLanguage(img, currentLanguage);
        // Optionally, trigger lazy loading again for any images in the new language.
    });
}
