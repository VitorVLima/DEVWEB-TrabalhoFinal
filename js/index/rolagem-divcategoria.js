const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        // Rolagem com o Mouse apenas em desktop
        if (!('ontouchstart' in window)) { // Verifica se o dispositivo não é touch
            category.addEventListener('wheel', function(event) {
                event.preventDefault(); // Previne o comportamento padrão da rolagem
                this.scrollLeft += event.deltaY; // Aumenta a sensibilidade da rolagem
            });
        }

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
            const walk = (x - startX) * 2; // Ajuste a sensibilidade da rolagem
            this.scrollLeft = scrollLeft - walk; // Atualiza a posição de rolagem
        });
    });