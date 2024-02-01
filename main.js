const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})