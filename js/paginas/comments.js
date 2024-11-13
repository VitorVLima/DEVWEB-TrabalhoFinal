
        // Elementos DOM
        const loginButton = document.getElementById("loginButton");
        const loginModal = document.getElementById("loginModal");
        const signupModal = document.getElementById("signupModal");
        const closeButton = document.getElementById("closeButton");
        const closeSignupButton = document.getElementById("closeSignupButton");
        const goToSignup = document.getElementById("goToSignup");
        const goToLogin = document.getElementById("goToLogin");
        const loginForm = document.getElementById("loginForm");
        const signupForm = document.getElementById("signupForm");
        const commentSection = document.getElementById("commentSection");
        const commentInput = document.getElementById("commentInput");
        const postCommentButton = document.getElementById("postCommentButton");
        const commentsContainer = document.getElementById("commentsContainer");

        // Variáveis globais
        let currentUser = null;

        // Abrir a tela de login
        loginButton.addEventListener("click", () => {
            loginModal.style.display = "block";
        });

        // Fechar a tela de login
        closeButton.addEventListener("click", () => {
            loginModal.style.display = "none";
        });

        // Abrir a tela de cadastro a partir do login
        goToSignup.addEventListener("click", () => {
            loginModal.style.display = "none";
            signupModal.style.display = "block";
        });

        // Fechar a tela de cadastro
        closeSignupButton.addEventListener("click", () => {
            signupModal.style.display = "none";
        });

        // Voltar para a tela de login
        goToLogin.addEventListener("click", () => {
            signupModal.style.display = "none";
            loginModal.style.display = "block";
        });

        // Função de cadastro
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;

            // Armazenar o usuário e senha no localStorage
            localStorage.setItem("username", newUsername);
            localStorage.setItem("password", newPassword);

            alert("Cadastro realizado com sucesso!");
            signupModal.style.display = "none"; // Fecha a tela de cadastro
            loginModal.style.display = "block"; // Volta para a tela de login
        });

        // Função de login
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Verifica se as credenciais correspondem ao cadastro
            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (username === storedUsername && password === storedPassword) {
                currentUser = username;
                alert("Login bem-sucedido!");
                loginModal.style.display = "none"; // Fecha a tela de login
                commentSection.style.display = "block"; // Exibe a seção de comentários
                loadComments(); // Carregar os comentários existentes
            } else {
                alert("Usuário ou senha incorretos.");
            }
        });

        // Função para adicionar um comentário
        postCommentButton.addEventListener("click", () => {
            const commentText = commentInput.value;
            if (commentText.trim() !== "") {
                const comment = {
                    username: currentUser,
                    text: commentText,
                };

                // Armazenar o comentário no localStorage
                let comments = JSON.parse(localStorage.getItem("comments")) || [];
                comments.push(comment);
                localStorage.setItem("comments", JSON.stringify(comments));

                // Limpar o campo de comentário e recarregar os comentários
                commentInput.value = "";
                loadComments();
            }
        });

        // Função para carregar os comentários armazenados
        function loadComments() {
            commentsContainer.innerHTML = ""; // Limpar comentários anteriores

            let comments = JSON.parse(localStorage.getItem("comments")) || [];

            comments.forEach((comment, index) => {
                const commentElement = document.createElement("div");
                commentElement.classList.add("comment");
                
                // Criar o conteúdo do comentário
                commentElement.innerHTML = `
                    <strong>${comment.username}</strong>: ${comment.text}
                    <button class="deleteCommentButton" data-index="${index}">Excluir</button>
                `;
                
                // Adicionar o evento de exclusão
                const deleteButton = commentElement.querySelector(".deleteCommentButton");
                deleteButton.addEventListener("click", () => {
                    deleteComment(index); // Chama a função para excluir o comentário
                });

                commentsContainer.appendChild(commentElement);
            });
        }

        // Função para excluir um comentário
        function deleteComment(index) {
            // Pega os comentários armazenados
            let comments = JSON.parse(localStorage.getItem("comments")) || [];

            // Remove o comentário pelo índice
            comments.splice(index, 1);

            // Salva os comentários atualizados no localStorage
            localStorage.setItem("comments", JSON.stringify(comments));

            // Recarrega os comentários após a exclusão
            loadComments();
        }
