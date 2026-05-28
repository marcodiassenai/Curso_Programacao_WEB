async function criarTarefa() {
    // Seleciona o elemento da ul onde as tarefas vão aparecer
    let ulLista = document.getElementById("listaTarefasnova");
    
    // Limpa a lista antes de carregar para não duplicar se o usuário clicar duas vezes
    ulLista.innerHTML = "";

    try {
        // 1. REQUISIÇÃO AO SERVIDOR (Faz um GET para o servidor.php solicitando a lista de dados)
        let resposta = await fetch('servidor.php');

        // 2. RECEBE O ARRAY (JSON)
        let tarefas = await resposta.json();

        if (tarefas.length > 0) {
            // 3. O JavaScript recebe os dados e faz o laço de repetição para desenhar a tela
            tarefas.forEach(textoDaTarefa => {
                let nTarefa = document.createElement("li");
                nTarefa.textContent = textoDaTarefa;
                ulLista.appendChild(nTarefa);
            });

            document.getElementById("mensagemR").textContent = "Tarefas carregadas com sucesso!";
        } else {
            document.getElementById("mensagemR").textContent = "Não há tarefas cadastradas no servidor.";
        }
    } catch (erro) {
        document.getElementById("mensagemR").textContent = "Falha na comunicação com a API. Verifique o console.";
    }
}