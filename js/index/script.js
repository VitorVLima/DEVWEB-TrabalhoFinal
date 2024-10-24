window.onload = function() {
    initializeSidebar();
    initializeSearch();
};

function initializeSidebar() {
    const menuButton = document.getElementById('menuButton');
    const closeMenu = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebar');
    const destinosButton = document.getElementById('destinos');
    const sidebarSubItems = document.getElementById('sidebarSubItems');

    if (!menuButton || !closeMenu || !sidebar || !destinosButton || !sidebarSubItems) {
        console.error('Um ou mais elementos não foram encontrados.');
        return;
    }

    sidebarSubItems.style.display = 'none';

    menuButton.addEventListener('click', function() {
        sidebar.style.display = 'block';
    });

    closeMenu.addEventListener('click', function() {
        sidebar.style.display = 'none';
        sidebarSubItems.style.display = 'none';
    });

    destinosButton.addEventListener('click', function() {
        sidebarSubItems.style.display = (sidebarSubItems.style.display === 'none' || sidebarSubItems.style.display === '') ? 'flex' : 'none';
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 769) {
            sidebar.style.display = 'none';
            sidebarSubItems.style.display = 'none';
        }
    });
}

function initializeSearch() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('search');

    function redirectToSearch() {
        const searchValue = searchInput.value.trim();
        if (searchValue) {
            window.location.href = `paginas/search.html?query=${encodeURIComponent(searchValue)}`;
        } else {
            alert('Digite um destino para pesquisar');
        }
    }

    searchButton.addEventListener('click', redirectToSearch);

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            redirectToSearch();
        }
    });
}
