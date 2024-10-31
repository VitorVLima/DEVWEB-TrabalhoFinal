const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    // Rolagem com o Mouse apenas em desktop
    if (!('ontouchstart' in window)) { // Verifica se o dispositivo não é touch
        category.addEventListener('wheel', function(event) {
            event.preventDefault(); // Previne o comportamento padrão da rolagem
            this.scrollLeft += event.deltaY * 2; // Aumenta a sensibilidade da rolagem
        });
    }

    // Rolagem com o Toque
    let startX;
    let startY;
    let scrollLeft;
    let isDragging = false;

    category.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX - this.offsetLeft;
        startY = e.touches[0].pageY - this.offsetTop;
        scrollLeft = this.scrollLeft;
        isDragging = true;
    });

    category.addEventListener('touchmove', function(e) {
        if (!isDragging) return; // Se não está arrastando, não faz nada

        const x = e.touches[0].pageX - this.offsetLeft;
        const y = e.touches[0].pageY - this.offsetTop;

        const walkX = x - startX; // Movimento horizontal
        const walkY = y - startY; // Movimento vertical

        // Verifica a direção do movimento
        if (Math.abs(walkX) > Math.abs(walkY)) {
            e.preventDefault(); // Previne a rolagem vertical
            this.scrollLeft = scrollLeft - (walkX * 2); // Aumenta a sensibilidade da rolagem
        }
    });

    category.addEventListener('touchend', function() {
        isDragging = false; // Reseta a flag ao soltar o toque
    });

    category.addEventListener('touchcancel', function() {
        isDragging = false; // Reseta a flag se o toque for cancelado
    });
});
