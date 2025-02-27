
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
        }, 1500); // set timer for loading pages
    });
});
