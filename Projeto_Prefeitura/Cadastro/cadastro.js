document.getElementById('form-cadastro').addEventListener('submit', async function(event) {
    

    event.preventDefault(); // Evita que a página recarregue

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const btnEnviar = document.getElementById('btn-enviar');
    const btnText = document.getElementById('btn-text');
    const feedback = document.getElementById('mensagem-feedback');

    // A rota deve ser exatamente a mesma definida no server.js
    const URL_SERVIDOR = 'http://localhost:3000/usuarios';

    const dadosUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    btnEnviar.disabled = true;
    btnText.innerText = "Cadastrando...";

    try {
        const resposta = await fetch(URL_SERVIDOR, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosUsuario)
        });

        if (resposta.ok) {
            feedback.style.color = "green";
            feedback.innerText = "Cadastro realizado com sucesso!";
            document.getElementById('form-cadastro').reset();
        } else {
            throw new Error();
        }

    } catch (error) {
        feedback.style.color = "red";
        feedback.innerText = "Erro ao conectar com o servidor.";
    } finally {
        btnEnviar.disabled = false;
        btnText.innerText = "Enviar Cadastro";
    }
});
