function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(({ username, text }) => {
        displayComment(username, text);
    });
}

function displayComment(username, commentText) {
    const commentsList = document.getElementById('commentsList');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');

    // Adicionando o username
    newComment.textContent = ` ${username}: `;
    
    // Criando a quebra de linha e o texto do comentário
    const br = document.createElement('br');
    newComment.appendChild(br);
    newComment.appendChild(document.createTextNode(commentText));

    // Criar botão de exclusão
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = function() {
        deleteComment(username, commentText);
    };

    newComment.appendChild(deleteButton);
    commentsList.appendChild(newComment);
}




function deleteComment(username, commentText) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const updatedComments = comments.filter(comment => 
        !(comment.username === username && comment.text === commentText)
    );
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    reloadComments();
}

function reloadComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = ''; // Limpa a lista atual
    loadComments(); // Carrega os comentários atualizados
}

document.getElementById('submitComment').addEventListener('click', function() {
    const usernameInput = document.getElementById('usernameInput');
    const commentInput = document.getElementById('commentInput');
    const username = usernameInput.value.trim();
    const commentText = commentInput.value.trim();

    if (username && commentText) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ username, text: commentText });
        localStorage.setItem('comments', JSON.stringify(comments));

        displayComment(username, commentText);
        usernameInput.value = ''; // Limpa o campo de entrada do nome
        commentInput.value = ''; // Limpa o campo de entrada do comentário
    } else {
        alert('Por favor, preencha seu nome e o comentário.');
    }
});

// Carrega os comentários ao iniciar a página
loadComments();Comments(); // Atualiza os comentários após a exclusão
