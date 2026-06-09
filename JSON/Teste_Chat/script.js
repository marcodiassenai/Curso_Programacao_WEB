// 1. Seleciona o formulário
const form = document.getElementById('formCadastro');


// 2. Escuta o momento em que o usuário clica no botão de enviar
form.addEventListener('submit', async (event) => {
event.preventDefault(); // Evita que a página recarregue
 
 
 // 3. Pega os valores dos inputs
const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;
 
 
 // 4. Cria o objeto com os dados
const dadosUsuario = {
    nome: nome,
    email: email,
    senha: senha
    };
 
 
 try { 
// 5. Faz a requisição POST para o json-server
 const resposta = await fetch('http://localhost:3000/usuarios', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json' // Informa o formato JSON
 },

 body: JSON.stringify(dadosUsuario) // Serializa o objeto JS
 });
 if (resposta.ok) {
    alert('Usuário cadastrado com sucesso!');
    form.reset(); // Limpa o formulário
 } else {
    alert('Erro ao salvar os dados.');
 }

 } catch (erro) {
 console.error('Erro na requisição:', erro);
 alert('Não foi possível conectar ao servidor.');
 }
});
