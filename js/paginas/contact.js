document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('msg').value.trim();

    if (!name || !email || !msg) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Salva os dados no localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('msg', msg);

    // Limpa o formulário após salvar
    this.reset();

    alert('Dados salvos com sucesso!');
});
