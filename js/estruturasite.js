async function loadHTML(elementId, file) {
    const response = await fetch(file);
    const text = await response.text();
    document.getElementById(elementId).innerHTML = text;
}

loadHTML('iheader', 'estrutura/header.html');
loadHTML('isidebar', 'estrutura/sidebar.html');
loadHTML('ifooter', 'estrutura/footer.html');