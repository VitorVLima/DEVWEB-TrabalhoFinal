const imagensContainer = document.getElementById('imagens');
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
    { src: '../imagens/galeria/imagemgaleria10.jpg', descricao: 'Cidade histórica de Ouro Preto, em Minas Gerais, vista de cima.' },
    { src: '../imagens/galeria/imagemgaleria11.jpg', descricao: 'Jardim Botânico, Curitiba, Paraná.' },
    { src: '../imagens/galeria/imagemgaleria12.jpeg', descricao: 'Pão de Açúcar, localizado às margens da Baía de Guanabara.' },
    { src: '../imagens/galeria/imagemgaleria13.jpg', descricao: 'Movimentada Avenida Paulista em São Paulo.' },
    { src: '../imagens/galeria/imagemgaleria14.png', descricao: 'Famosa pedra furada, de Jericoacoara-CE.' },
    { src: '../imagens/galeria/imagemgaleria15.png', descricao: 'Praia da Pipa, localizada em Natal-RN.' },
    { src: '../imagens/galeria/imagemgaleria16.png', descricao: 'Praia do Antunes em Maragogi, vista aérea.' }
];

let imagemAtualIndex = 0;

function mostrarImagem(index) {
    imagemAtualIndex = index;
    document.getElementById('imagemAtual').src = imagens[index].src;
    document.getElementById('descricao').innerText = imagens[index].descricao;
    atualizarMiniaturas();
    rolarParaMiniatura(index);
}

function trocarImagem(direcao) {
    imagemAtualIndex += direcao;
    if (imagemAtualIndex < 0) {
        imagemAtualIndex = imagens.length - 1;
    } else if (imagemAtualIndex >= imagens.length) {
        imagemAtualIndex = 0;
    }
    mostrarImagem(imagemAtualIndex);
}

function atualizarMiniaturas() {
    const miniaturas = document.querySelectorAll('.imagens img');
    miniaturas.forEach((miniatura, index) => {
        miniatura.classList.toggle('selecionada', index === imagemAtualIndex);
    });
}

function rolarParaMiniatura(index) {
    const miniaturas = document.querySelectorAll('.imagens img');
    if (miniaturas[index]) {
        const miniatura = miniaturas[index];
        const miniaturaOffset = miniatura.offsetLeft;
        const containerOffset = imagensContainer.offsetWidth / 2;
        const scrollPosition = miniaturaOffset - containerOffset + (miniatura.offsetWidth / 2);
        imagensContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
}

// Inicializa a primeira imagem
mostrarImagem(0);

// Rolagem do mouse
imagensContainer.addEventListener('wheel', function(event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY;
});

// Rolagem com o toque
let startX, scrollLeft;

imagensContainer.addEventListener('touchstart', function(e) {
    startX = e.touches[0].pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
});

imagensContainer.addEventListener('touchmove', function(e) {
    e.preventDefault();
    const x = e.touches[0].pageX - this.offsetLeft;
    const walk = (x - startX) * 2;
    this.scrollLeft = scrollLeft - walk;
});

// Atualiza a funcionalidade do clique nas miniaturas
const miniaturas = document.querySelectorAll('.imagens img');
miniaturas.forEach((miniatura, index) => {
    miniatura.addEventListener('click', () => mostrarImagem(index));
});
