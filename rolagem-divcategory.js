const category = document.querySelector('.category');

// Rolagem com o mouse
category.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        event.preventDefault(); // Previne o comportamento padrão da rolagem
        this.scrollLeft += event.deltaY; // Rola horizontalmente
    }
});

// Rolagem com o toque
let startX;
let scrollLeft;

category.addEventListener('touchstart', function(e) {
    startX = e.touches[0].pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
});

category.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do toque
    const x = e.touches[0].pageX - this.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade
    this.scrollLeft = scrollLeft - walk;
});
