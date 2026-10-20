document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('lightsaber-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        const isActief = toggleBtn.classList.toggle('active');
        toggleBtn.setAttribute('aria-pressed', isActief ? 'true' : 'false');
    });
});