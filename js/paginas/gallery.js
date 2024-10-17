const imagens = [
    { src: '../imagens/galeria/imagemgaleria1.jpg', descricao: 'Cataratas do Iguaçu, Foz do Iguaçu, Paraná.' },
    { src: '../imagens/galeria/imagemgaleria2.jpg', descricao: 'Pelourinho, coração da Bahia e da cultura africana no Brasil.' },
    { src: '../imagens/galeria/imagemgaleria3.jpg', descricao: 'Cristo Redentor, maior cartão postal do Brasil.' },
    { src: '../imagens/galeria/imagemgaleria4.jpg', descricao: 'Teatro Amazonas, cartão postal de Manaus.' },
    { src: '../imagens/galeria/imagemgaleria5.jpeg', descricao: 'Monte Roraima, fronteira entre Brasil e Venezuela.' },
    { src: '../imagens/galeria/imagemgaleria6.jpeg', descricao: 'Piscinas naturais de Porto de Galinhas-PE.' },
    { src: '../imagens/galeria/imagemgaleria7.jpg', descricao: 'Cachoeira de Santa Bárbara na Chapada dos Veadeiros, Goiás.' },
    { src: '../imagens/galeria/imagemgaleria8.jpg', descricao: 'Caverna Aroe Jari, Chapada dos Guimarães, Mato Grosso.' },
    { src: '../imagens/galeria/imagemgaleria9.jpg', descricao: 'Catedral Metropolitana de Brasília, Distrito Federal.' },
    { src: '../imagens/galeria/imagemgaleria10.jpg', descricao: 'Cidade hitórica de Ouro Preto, em Minas Gerais, vista de cima.' },
    { src: '../imagens/galeria/imagemgaleria11.jpg', descricao: 'Jardim Botânico, Curitiba, Paraná.' },
    { src: '../imagens/galeria/imagemgaleria12.jpeg', descricao: 'Pão de Acuçar, localizado às margens da Baía de Guanabara.' },
    { src: '../imagens/galeria/imagemgaleria13.jpg', descricao: 'Movimentada Avenida Paulista em São Paulo.' },
    { src: '../imagens/galeria/imagemgaleria14.png', descricao: 'Famosa pedra furada, de Jericoacoara-CE.' },
    { src: '../imagens/galeria/imagemgaleria15.png', descricao: 'Praia da Pipa, Localizada em Natal-RN.' },
    { src: '../imagens/galeria/imagemgaleria16.png', descricao: 'Praia do Antunes em Maragogi, vista aérea.' }
];

let indiceAtual = 0;

function mostrarImagem(src, descricao) {
    document.getElementById('imagemAtual').src = src;
    document.getElementById('descricao').textContent = descricao;
    indiceAtual = imagens.findIndex(img => img.src === src);
}

function trocarImagem(direcao) {
    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    mostrarImagem(imagens[indiceAtual].src, imagens[indiceAtual].descricao);
}

// Mostrar a primeira imagem ao carregar
mostrarImagem(imagens[indiceAtual].src, imagens[indiceAtual].descricao);

const imagensContainer = document.getElementById('imagens');


    imagensContainer.addEventListener('wheel', function(event) {
        event.preventDefault(); // Previne o comportamento padrão da rolagem
        this.scrollLeft += event.deltaY; // Rola horizontalmente
    });

    // Rolagem com o toque
    let startX;
    let scrollLeft;

    imagensContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX - this.offsetLeft;
        scrollLeft = this.scrollLeft;
    });

    imagensContainer.addEventListener('touchmove', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do toque
        const x = e.touches[0].pageX - this.offsetLeft;
        const walk = (x - startX) * 2; // Ajuste a sensibilidade
        this.scrollLeft = scrollLeft - walk;
    });
