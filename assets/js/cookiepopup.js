document.addEventListener('DOMContentLoaded', () => {
    const dialogModal = document.getElementById('cookiepopup');
    const ahsokacookie = document.getElementById('ahsokacookie');
    const acceptbtn = document.getElementById('acceptbtn');
    const declinebtn = document.getElementById('declinebtn');
    const mainContent = document.querySelector('main');


    const keuze = localStorage.getItem('cookieKeuze');

    if (keuze === "geweigerd" || !keuze) {
        mainContent.classList.add('hide-content');
    } else {
        mainContent.classList.remove('hide-content');
    }

    if(!keuze){
        setTimeout(() => {
            if(!dialogModal.open){
                dialogModal.showModal();
            }
        },1000)
    }

    ahsokacookie.addEventListener('click', (e) => {
        dialogModal.showModal();
        console.log('ik ben geclickt');
    });

    acceptbtn.addEventListener('click', () => {
        localStorage.setItem('cookieKeuze', 'geaccepteerd');
        mainContent.classList.remove('hide-content');
        dialogModal.close();
    });

    declinebtn.addEventListener('click', () => {
        localStorage.setItem('cookieKeuze', 'geweigerd');
        mainContent.classList.add('hide-content');
        dialogModal.close();
    });
});

/*
    https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal
*/