const categoryContainer = document.getElementsByClassName('category');

for (let i = 0; i < categoryContainer.length; i++) {
    categoryContainer[i].addEventListener('wheel', function(event) {
        event.preventDefault(); // Previne o comportamento padrão da rolagem
        this.scrollLeft += event.deltaY; // Rola horizontalmente
    });

    // Rolagem com o toque
    let startX;
    let scrollLeft;

    categoryContainer[i].addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX - this.offsetLeft;
        scrollLeft = this.scrollLeft;
    });

    categoryContainer[i].addEventListener('touchmove', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do toque
        const x = e.touches[0].pageX - this.offsetLeft;
        const walk = (x - startX) * 2; // Ajuste a sensibilidade
        this.scrollLeft = scrollLeft - walk;
    });
}