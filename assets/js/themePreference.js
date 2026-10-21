
window.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('#theme-toggle');


    if (!themeToggle) return;

    if (window.location.href.includes('-dark.html')) {
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('click', function () {
        const url = window.location.href;

        if (url.includes('-dark.html')) {
    
            localStorage.setItem('theme', 'light');
            window.location.href = url.replace('-dark.html', '.html');
        } else {
            localStorage.setItem('theme', 'dark');
            window.location.href = url.replace('.html', '-dark.html');
        }
    });
});