const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    if (navList.classList.contains('active')) {
        
        setTimeout(() => {
            navList.classList.remove('active');
        }, 2000); 
    }
});