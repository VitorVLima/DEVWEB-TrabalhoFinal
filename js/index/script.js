window.onload = function() {
    initializeSidebar();
    initializeSearch();
    startSlideshow();
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

let currentHeader = 0;
const headers = document.querySelectorAll('.header');
let slideshowInterval;

function showHeader(index) {
    headers.forEach((header, i) => {
        if (i === index) {
            header.style.visibility = 'visible'; // Torna visível
            header.style.opacity = '1'; // Torna opaco
            header.classList.add('active');
        } else {
            header.style.opacity = '0'; // Torna transparente
            header.classList.remove('active');
            // Aguarda a transição antes de ocultar completamente
            setTimeout(() => {
                if (header.style.opacity === '0') {
                    header.style.visibility = 'hidden'; // Torna invisível
                }
            }, 500); // Tempo deve coincidir com a transição de opacidade
        }
    });
}

function startSlideshow() {
    showHeader(currentHeader);
    resetSlideshowInterval();
}

function resetSlideshowInterval() {
    clearInterval(slideshowInterval);
    slideshowInterval = setInterval(() => {
        currentHeader = (currentHeader + 1) % headers.length;
        showHeader(currentHeader);
    }, 7000);
}

// Botões de navegação
document.getElementById('nextButton').addEventListener('click', function() {
    currentHeader = (currentHeader + 1) % headers.length;
    showHeader(currentHeader);
    resetSlideshowInterval();
});

document.getElementById('prevButton').addEventListener('click', function() {
    currentHeader = (currentHeader - 1 + headers.length) % headers.length;
    showHeader(currentHeader);
    resetSlideshowInterval();
});
