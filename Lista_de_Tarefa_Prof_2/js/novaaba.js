function criartarefa() {

    let getTarefa = localStorage.getItem("tarefa").trim()
    // Seleciona o elemento da ul

    let tarefaNova = document.getElementById("listaTarefasNova")

    //cria novo item (li) e insere na (lista ul)
    let nTarefa = document.createElement("li")

    //atribui o valor da tarefa ao conteúdo do novo elemento li
    nTarefa.textContent = getTarefa

    //adiciona o novo elemento li abaixo à lista uln
    tarefaNova.appendChild(nTarefa)

    console.log(getTarefa)

    getTarefa = localStorage.clear()

}
//let mensagem = "Tarefa adicionada com sucesso!"
//document.getElementById("mensagem").textContent = mensagem