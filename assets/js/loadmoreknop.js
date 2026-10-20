document.addEventListener('DOMContentLoaded', () => {
    const karakterkaarten = document.querySelectorAll('main > section:first-of-type > a');
    const laadMeerKnop = document.getElementById('loadmore-button');

    if (!laadMeerKnop || karakterkaarten.length === 0) return;

    let zichtbaar = 8;

    karakterkaarten.forEach((kaart, index) => {
        if (index >= zichtbaar) {
            kaart.classList.add('is-hidden');
        }
    });

    laadMeerKnop.addEventListener('click', () => {
        zichtbaar += 8;

        karakterkaarten.forEach((kaart, index) => {
            if (index < zichtbaar) {
                kaart.classList.remove('is-hidden');
            }
        });

        if (zichtbaar >= karakterkaarten.length) {
            laadMeerKnop.hidden = true;
        }
    });
});