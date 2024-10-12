document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('menuButton');
    const closeMenu = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebar');
    const destinosButton = document.getElementById('destinos');
    const sidebarSubItems = document.getElementById('sidebarSubItems');

    // Inicializa o estilo de exibição da sidebarSubItems
    sidebarSubItems.style.display = 'none';

    menuButton.addEventListener('click', function() {
        sidebar.style.display = 'block'; // Abre a sidebar
    });

    closeMenu.addEventListener('click', function() {
        sidebar.style.display = 'none'; // Esconde a sidebar
        sidebarSubItems.style.display = 'none'; // Esconde subitens
    });

    destinosButton.addEventListener('click', function() {
        // Alterna a exibição dos subitens
        sidebarSubItems.style.display = (sidebarSubItems.style.display === 'none' || sidebarSubItems.style.display === '') ? 'flex' : 'none';
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 769) {
            sidebar.style.display = 'none'; // Esconde a sidebar em telas grandes
            sidebarSubItems.style.display = 'none'; // Esconde subitens da sidebar
        }
    });
});


