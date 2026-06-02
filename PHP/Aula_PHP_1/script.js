// Transformamos a função em 'async' para podermos usar o 'await' e 
// esperar o servidor processar e retornar a resposta da API.
async function adicionarTarefa() {

    // Dado que o usuário digitou
    let inputElement = document.getElementById("inputTarefa");
    let tarefa = inputElement.value;

    if (tarefa !== "" && tarefa !== null && tarefa !== undefined && tarefa.trim() !== "") {

        try {
            // 1. REQUISIÇÃO AO SERVIDOR (Faz um POST para a API em servidor.php)
            let resposta = await fetch('servidor.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tarefa: tarefa }) // Empacota a tarefa em JSON
            });

            // 2. LÊ A RESPOSTA DO SERVIDOR
            let dados = await resposta.json();

            // 3. Atualiza a tela com a mensagem que veio do PHP
            inputElement.value = "";
            document.getElementById("mensagem").textContent = dados.mensagem;

        } catch (erro) {
            document.getElementById("mensagem").textContent = "Erro de conexão com o servidor!";
        }

    } else {
        document.getElementById("mensagem").textContent = "Digite uma tarefa válida!"
    }
}