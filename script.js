// Animation d’apparition des étapes
const etapes = document.querySelectorAll('.etape');

function reveal() {
    etapes.forEach(etape => {
        const rect = etape.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            etape.style.opacity = 1;
            etape.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener('scroll', reveal);

etapes.forEach(etape => {
    etape.style.opacity = 0;
    etape.style.transform = "translateY(30px)";
    etape.style.transition = "all 0.6s ease";
});

reveal();
