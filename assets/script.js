// assets/script.js
function toggleMode() {
    document.body.classList.toggle('night');
    document.body.classList.toggle('day');
    
    const container = document.querySelector('.container');
    container.classList.toggle('night');
    container.classList.toggle('day');
    
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.classList.toggle('night');
        link.classList.toggle('day');
    });

    const toggleBtn = document.querySelector('.toggle-btn');
    toggleBtn.classList.toggle('night');
    toggleBtn.classList.toggle('day');
}
