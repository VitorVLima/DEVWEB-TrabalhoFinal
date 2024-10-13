const items = document.querySelectorAll('.items .item');
const noResults = document.getElementById('noResults');
const resultMessage = document.getElementById('resultMessage');

// Função para pegar o parâmetro da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function searchItems() {
    const result = getQueryParam('query').toLowerCase().trim();
    let hasResults = false;

    // Exibir mensagem de resultados encontrados
    resultMessage.textContent = `Resultados encontrados para: "${result}"`;

    // Mostrar ou esconder itens
    items.forEach(item => {
        if (item.textContent.toLowerCase().trim().indexOf(result) !== -1) {
            item.style.display = 'block';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });

    // Mostrar ou esconder mensagem de "sem resultados"
    noResults.style.display = hasResults ? 'none' : 'block';
}

// Preencher o campo de pesquisa com o valor da URL e executar a pesquisa
const query = getQueryParam('query');
if (query) {
    searchItems(); // Executar a pesquisa automaticamente
} else {
    resultMessage.textContent = 'Por favor, insira um destino para pesquisar.';
    noResults.style.display = 'block';
}

