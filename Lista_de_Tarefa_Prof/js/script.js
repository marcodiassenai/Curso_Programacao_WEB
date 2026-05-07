function adicionarTarefa() {

    //recebe valor do input do usuário
    //usar .trim() para remover espaços e testar se sobrou algum caractere
    let inputTarefa = document.getElementById("inputTarefa").value.trim();
    let tarefa = inputTarefa
    console.log(inputTarefa)

    // valida se está vazio
    if (tarefa === "") {
        document.getElementById("mensagem").textContent =
            "Digite uma tarefa antes de adicionar!"
        return
    }

    //cria novo item (li) e insere na (lista ul)
    let listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa)

    //mensagem de tarefa adicionada com sucesso
    let mensagem = "Tarefa adicionada com sucesso!"
    document.getElementById("mensagem").textContent = mensagem
    //limpa o input do usuário
    inputTarefa.value = ""

    if (novaTarefatarefa.trim() !== "") 
    tarefa.innerText = campo.value;
        else 
    mensagem.innerText = "";

}