document.addEventListener('DOMContentLoaded', () => {

    const lightsaber1 = document.getElementById('lightsaber1');
    const lightsaber2 = document.getElementById('lightsaber2');

    lightsaber1.addEventListener('click', () => {
        if (window.innerWidth <= 500) return;
        lightsaber1.classList.toggle('active');
    });

    lightsaber2.addEventListener('click', () => {
        if (window.innerWidth <= 500) return;
        lightsaber2.classList.toggle('active');
    })
})