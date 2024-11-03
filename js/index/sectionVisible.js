document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.invisible');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona a classe 'visible'
                observer.unobserve(entry.target); // Para observar novamente
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section); // Começa a observar cada destaque
    });
});
