const categoryContainer = document.getElementsByClassName('category');

        for (let i = 0; i < categoryContainer.length; i++) {
            // Rolagem com o Mouse
            categoryContainer[i].addEventListener('wheel', function(event) {
                event.preventDefault(); // Previne o comportamento padrão da rolagem
                this.scrollLeft += event.deltaY; // Rola horizontalmente
            });

            // Rolagem com o Toque
            let startX;
            let scrollLeft;
            let isScrolling = false;

            categoryContainer[i].addEventListener('touchstart', function(e) {
                startX = e.touches[0].pageX - this.offsetLeft;
                scrollLeft = this.scrollLeft;
            });

            categoryContainer[i].addEventListener('touchmove', function(e) {
                e.preventDefault(); // Previne o comportamento padrão do toque
                const x = e.touches[0].pageX - this.offsetLeft;
                const walk = (x - startX) * 2; // Ajuste a sensibilidade
                const newScrollLeft = scrollLeft - walk;

                // Tratamento de bordas
                if (newScrollLeft >= 0 && newScrollLeft <= this.scrollWidth - this.clientWidth) {
                    if (!isScrolling) {
                        isScrolling = true;
                        requestAnimationFrame(() => {
                            this.scrollLeft = newScrollLeft;
                            isScrolling = false;
                        });
                    }
                }
            });
        }