window.onload = function() {
    initializeSidebar();
    initializeSearch();
    startSlideshow(); // Mover aqui para evitar sobreposição
    initializeTouchSwipe(); // Inicializa o deslizar
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

    sidebarSubItems.style.display = 'none'; // Esconde subitens no início

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

let currentHeader = 0;
const headers = document.querySelectorAll('.header');

function showHeader(index) {
    headers.forEach((header, i) => {
        if (i === index) {
            header.classList.add('active');
            header.style.display = 'flex';
            setTimeout(() => header.style.opacity = '1', 10);
        } else {
            header.style.opacity = '0';
            header.classList.remove('active');
            header.style.display = 'none';
        }
    });
}

function startSlideshow() {
    showHeader(currentHeader);
    setTimeout(() => {
        currentHeader = (currentHeader + 1) % headers.length;
        showHeader(currentHeader);
        startSlideshow();
    }, 7000);
}

function initializeTouchSwipe() {
    let startX;

    headers.forEach(header => {
        header.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        header.addEventListener('touchmove', (e) => {
            const moveX = e.touches[0].clientX;
            const diffX = startX - moveX;

            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    currentHeader = (currentHeader + 1) % headers.length;
                } else {
                    currentHeader = (currentHeader - 1 + headers.length) % headers.length;
                }
                showHeader(currentHeader);
            }
        });
    });
}
