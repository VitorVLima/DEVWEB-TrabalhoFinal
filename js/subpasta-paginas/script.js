function loadHTML(elementId, filePath, callback) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback(); // Chama o callback, se existir
        })
        .catch(error => console.error('Erro ao carregar:', error));
}

window.onload = function() {
    Promise.all([
        loadHTML('iheader', '../../estrutura/subpasta-paginas/header.html', initializeSearch),
        loadHTML('isidebar', '../../estrutura/subpasta-paginas/sidebar.html', initializeSidebar),
        loadHTML('ifooter', '../../estrutura/subpasta-paginas/footer.html')
    ]).catch(error => console.error('Erro ao carregar um ou mais elementos:', error));
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
        sidebar.classList.add('show'); // Adiciona a classe para mostrar
        sidebar.style.display = 'block'; // Garante que a sidebar seja exibida
        // Para garantir que a transição funcione, use setTimeout
        setTimeout(() => {
            sidebar.style.opacity = '1'; // Torna a sidebar visível
        }, 50);
    });

    closeMenu.addEventListener('click', function() {
        sidebar.style.opacity = '0'; // Esconde com transição
        setTimeout(() => {
            sidebar.classList.remove('show'); // Remove a classe após a animação
            sidebar.style.display = 'none'; // Oculta totalmente
        }, 500); // Espera o tempo da transição
    });

    destinosButton.addEventListener('click', function() {
        sidebarSubItems.style.display = (sidebarSubItems.style.display === 'none' || sidebarSubItems.style.display === '') ? 'flex' : 'none';
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 769) {
            sidebar.classList.remove('show'); // Remove a classe em telas maiores
            sidebar.style.display = 'none'; // Oculta totalmente
        }
    });
}

function initializeSearch(){
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('search');

    function redirectToSearch() {
        const searchValue = searchInput.value.trim();
        if (searchValue) {
            // Redireciona para a página de pesquisa com o valor como parâmetro de URL
            window.location.href = `../../paginas/search.html?query=${encodeURIComponent(searchValue)}`;
        } else {
            alert('Digite um destino para pesquisar');
        }
    }

    // Evento de clique no botão de pesquisa
    searchButton.addEventListener('click', redirectToSearch);

    // Evento de pressionar a tecla Enter
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            redirectToSearch();
        }
    });
}