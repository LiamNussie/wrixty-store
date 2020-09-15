const menu = document.querySelector('#menu');
const navLinks = document.querySelector('ul');
const searchBox = document.querySelector('#search');

menu.addEventListener('click', () => {
    menu.classList.toggle('change');
    if(menu.classList.contains('change')) {
        // navLinks.style.display = 'block';
        setTimeout(() => {
            navLinks.style.animation = 'dropDown 0.5s linear 1'
            navLinks.style.transform = 'translate(-20px,0)'
        }, 300) 
    } else {
            navLinks.style.display = 'none';
    }
});