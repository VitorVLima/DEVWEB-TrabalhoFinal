const scrollButtons = document.querySelectorAll('.scroll-button');

    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.parentElement.querySelector('.category');
            const scrollAmount = 190; // Quantidade de pixels para rolar

            if (button.classList.contains('left')) {
                category.scrollLeft -= scrollAmount; // Rolar para a esquerda
            } else {
                category.scrollLeft += scrollAmount; // Rolar para a direita
            }
        });
    });