function changeImage(thumbnail) {
    const currentImage = document.getElementById('current-image');
    currentImage.src = thumbnail.src; // Atualiza a imagem principal
    currentImage.alt = thumbnail.alt;   // Atualiza a descrição (se necessário)
}

