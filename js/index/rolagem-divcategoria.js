const categoryContainer = document.getElementsByClassName('category');

        for (let i = 0; i < categoryContainer.length; i++) {
            // Rolagem com o Mouse
            categoryContainer[i].addEventListener('wheel', function(event) {
                event.preventDefault(); // Previne o comportamento padrão da rolagem
                this.scrollLeft += event.deltaY * 1.5; // Aumentar sensibilidade da rolagem
            });

            // Rolagem com o Toque
            let startX;
            let scrollLeft;

            categoryContainer[i].addEventListener('touchstart', function(e) {
                startX = e.touches[0].pageX - this.offsetLeft;
                scrollLeft = this.scrollLeft;
            });

            categoryContainer[i].addEventListener('touchmove', function(e) {
                e.preventDefault(); // Previne o comportamento padrão do toque
                const x = e.touches[0].pageX - this.offsetLeft;
                const walk = (x - startX) * 3; // Aumentar a sensibilidade da rolagem
                this.scrollLeft = scrollLeft - walk; // Atualiza imediatamente
            });
        }