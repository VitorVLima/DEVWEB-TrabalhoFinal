document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.invisible');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section); 
    });
});
