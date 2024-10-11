const menuButton = document.getElementById('menuButton');
const closeMenu = document.getElementById('closeMenu');
const sidebar = document.getElementById('sidebar');
const destinosButton = document.getElementById('destinos');
const sidebarSubItems = document.getElementById('sidebarSubItems');

menuButton.addEventListener('click', function(){
    sidebar.style.display = 'block';
    //abre a sidebar ao clicar no icone de menu
});

closeMenu.addEventListener('click', function(){
    sidebar.style.display = 'none';
    sidebarSubItems.style.display = 'none';
    //esconde a sidebar ao clicar em fechar
});

destinosButton.addEventListener('click', function(){
    if(sidebarSubItems.style.display == 'none'){
        sidebarSubItems.style.display = 'flex';
    }else{
        sidebarSubItems.style.display = 'none';
    }
});



window.addEventListener('resize', function() {
    if (window.innerWidth > 769) {
        sidebar.style.display = 'none'; // Esconde a sidebar se a largura for maior que 769px
        sidebarSubItems.style.display = 'none'; // subitens da sidebar são escondidos 
    }
});

