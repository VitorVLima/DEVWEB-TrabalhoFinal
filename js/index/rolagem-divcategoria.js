const categoryContainer = document.getElementsByClassName('category');

    for (let i = 0; i < categoryContainer.length; i++) {
        // Rolagem com o Mouse
        categoryContainer[i].addEventListener('wheel', function(event) {
            event.preventDefault(); // Previne o comportamento padrão da rolagem
            this.scrollLeft += event.deltaY * 1.5; // Aumentar sensibilidade da rolagem
        });

        // Rolagem com o Toque
        let startX;
        let startY;
        let scrollLeft;

        categoryContainer[i].addEventListener('touchstart', function(e) {
            startX = e.touches[0].pageX - this.offsetLeft;
            startY = e.touches[0].pageY - this.offsetTop;
            scrollLeft = this.scrollLeft;
        });

        categoryContainer[i].addEventListener('touchmove', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do toque
            const x = e.touches[0].pageX - this.offsetLeft;
            const y = e.touches[0].pageY - this.offsetTop;
            const walkX = (x - startX) * 5; // Sensibilidade para rolagem horizontal
            const walkY = (y - startY) * 5; // Sensibilidade para rolagem vertical

            // Verifica se o movimento horizontal é maior que o vertical
            if (Math.abs(walkX) > Math.abs(walkY)) {
                this.scrollLeft = scrollLeft - walkX; // Rolagem lateral
            } else {
                // Permite a rolagem vertical se a distância vertical for maior
                this.scrollTop += walkY; // Rolagem vertical, se necessário
            }
        });
    }