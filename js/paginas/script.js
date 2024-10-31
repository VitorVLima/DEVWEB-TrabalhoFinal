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
        loadHTML('iheader', '../estrutura/paginas/header.html', initializeSearch),
        loadHTML('isidebar', '../estrutura/paginas/sidebar.html', initializeSidebar),
        loadHTML('ifooter', '../estrutura/paginas/footer.html')
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
        sidebar.style.display = 'block'; // Garante que a sidebar seja exibida
        requestAnimationFrame(() => { // Espera um ciclo de renderização para aplicar a animação
            sidebar.classList.add('show'); // Mostra a sidebar
            sidebar.style.opacity = '1'; // Garante que a opacidade esteja visível
        });
    });

    closeMenu.addEventListener('click', function() {
        sidebar.classList.remove('show'); // Remove a classe para esconder a sidebar
        sidebar.style.opacity = '0'; // Inicia a animação de fechamento
        setTimeout(() => {
            sidebar.style.display = 'none'; // Oculta totalmente após a animação
        }, 500); // Espera o tempo da transição
        sidebarSubItems.style.display = 'none';
    });

    destinosButton.addEventListener('click', function() {
        sidebarSubItems.style.display = (sidebarSubItems.style.display === 'none' || sidebarSubItems.style.display === '') ? 'flex' : 'none';
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 769) {
            sidebar.classList.remove('show'); // Remove a classe em telas maiores
            sidebar.style.display = 'none'; // Oculta totalmente
            sidebar.style.opacity = '1'; // Reseta a opacidade para futuras aberturas
            sidebarSubItems.style.display = 'none';
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
            window.location.href = `../paginas/search.html?query=${encodeURIComponent(searchValue)}`;
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
