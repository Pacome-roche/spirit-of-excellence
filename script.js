// Fonction pour révéler les sections au défilement
window.addEventListener('scroll', revealSections);

function revealSections() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;
        if (sectionTop < triggerPoint) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Animation dynamique pour le logo
const logo = document.querySelector('.logo');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'rotate(360deg)';
    logo.style.transition = 'transform 1s';
});

logo.addEventListener('mouseout', () => {
    logo.style.transform = 'rotate(0deg)';
});
