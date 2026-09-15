let theme = document.getElementById('theme');
let lighttheme = document.getElementById('lightside-button');
let darktheme = document.getElementById('darkside-button');

lighttheme.addEventListener('click', () => {
    console.log('hello lightside') ;
    localStorage.setItem('theme', 'light');
    window.location.href = '../../pages/homepage.html';
    
});


darktheme.addEventListener('click', () => {
    console.log('hello darkside');
    localStorage.setItem('theme', 'dark'); 
    window.location.href = '../../pages/homepage.html';   
    
});

/* Dit is de code van https://stackoverflow.com/questions/56871118/change-theme-and-store-it-in-local-storage*/