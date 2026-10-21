let isAan = false;

const lightsaber = document.querySelector('#lightsaber-toggle');
const kristallen = document.querySelectorAll('button[data-color]');
const leesMeerKnop = document.querySelector('#history-knop');
const extraTekst = document.querySelector('#history-extra');

function lightsaberAanUit() {
    if (isAan === true) {
        isAan = false;
        lightsaber.setAttribute('aria-pressed', 'false');
    } else {
        isAan = true;
        lightsaber.setAttribute('aria-pressed', 'true');
    }
}

lightsaber.addEventListener('click', lightsaberAanUit);

function kiesKristal(knop) {
    const kleur = knop.dataset.blade;
    const gloed = knop.dataset.glow;
    const naam = knop.dataset.color;

    function pasKleurAan() {
        document.documentElement.style.setProperty('--blade-color', kleur);
        document.documentElement.style.setProperty('--blade-glow', gloed);
        lightsaber.setAttribute('data-active-color', naam);

        
        kristallen.forEach(function (k) {
            k.setAttribute('aria-pressed', 'false');
        });
        knop.setAttribute('aria-pressed', 'true');
    }

    if (isAan === true) {
        lightsaberAanUit();

        setTimeout(function () {
            pasKleurAan();
            lightsaberAanUit();
        }, 400);
    } else {

        pasKleurAan();
        lightsaberAanUit();
    }
}

kristallen.forEach(function (knop) {
    knop.addEventListener('click', function () {
        kiesKristal(knop);
    });
});

leesMeerKnop.addEventListener('click', function () {
    if (extraTekst.hidden === true) {
        extraTekst.hidden = false;
        leesMeerKnop.textContent = 'Nieuwsgierig lees minder';
    } else {
        extraTekst.hidden = true;
        leesMeerKnop.textContent = 'Nieuwsgierig lees meer';
    }
});