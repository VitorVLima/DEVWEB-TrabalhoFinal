const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    // Rolagem com o Mouse
    category.addEventListener('wheel', function(event) {
        event.preventDefault(); // Previne o comportamento padrão da rolagem
        this.scrollLeft += event.deltaY * 1.5; // Aumentar sensibilidade da rolagem
    });

    // Rolagem com o Toque
    let startX;
    let scrollLeft;

    category.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX - this.offsetLeft;
        scrollLeft = this.scrollLeft;
    });

    category.addEventListener('touchmove', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do toque
        const x = e.touches[0].pageX - this.offsetLeft;
        const walk = (x - startX) * 5; // Aumentar a sensibilidade da rolagem
        this.scrollLeft = scrollLeft - walk; // Atualiza imediatamente
    });
});