const mountain = document.querySelector('.category.mountain');
const beach = document.querySelector('.category.beach');
const family = document.querySelector('.category.family');
const hcity = document.querySelector('.category.historicalCity');

// Rolagem com o mouse
mountain.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        event.preventDefault(); // Previne o comportamento padrão da rolagem
        this.scrollLeft += event.deltaY; // Rola horizontalmente
    }
});

beach.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        event.preventDefault(); // Previne o comportamento padrão da rolagem
        this.scrollLeft += event.deltaY; // Rola horizontalmente
    }
});

family.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        event.preventDefault(); // Previne o comportamento padrão da rolagem
        this.scrollLeft += event.deltaY; // Rola horizontalmente
    }
});

hcity.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        event.preventDefault(); // Previne o comportamento padrão da rolagem
        this.scrollLeft += event.deltaY; // Rola horizontalmente
    }
});

// Rolagem com o toque
let startX;
let scrollLeft;

mountain.addEventListener('touchstart', function(e) {
    startX = e.touches[0].pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
});

mountain.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do toque
    const x = e.touches[0].pageX - this.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade
    this.scrollLeft = scrollLeft - walk;
});

beach.addEventListener('touchstart', function(e) {
    startX = e.touches[0].pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
});

beach.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do toque
    const x = e.touches[0].pageX - this.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade
    this.scrollLeft = scrollLeft - walk;
});

family.addEventListener('touchstart', function(e) {
    startX = e.touches[0].pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
});

family.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do toque
    const x = e.touches[0].pageX - this.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade
    this.scrollLeft = scrollLeft - walk;
});

hcity.addEventListener('touchstart', function(e) {
    startX = e.touches[0].pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
});

hcity.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do toque
    const x = e.touches[0].pageX - this.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade
    this.scrollLeft = scrollLeft - walk;
});
