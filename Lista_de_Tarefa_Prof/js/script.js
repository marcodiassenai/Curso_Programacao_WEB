
// a função do botão quando ele for clicado
function adicionarTarefa() {

    //recebe valor do input do usuário
    //usar .trim() para remover espaços e testar se sobrou algum caractere
    //value = para querer somente o comando que ta escrito dentro da caixa
    //o let é para criar uma variável dentro do javascript, e nela colocar o valor que esta em inputTarefa
    let tarefa = document.getElementById("inputTarefa").value.trim();
    
    //cria uma variavel para pegar o que esta dentro do id mensagem do html
    //textContent = diz para a variavel msn que é para colocar o texto que esta entre aspas
    let msn = document.getElementById("mensagem").textContent = "Tarefa adicionada com sucesso"
    
    
    //mostra o que ta sendo escrito, semelhando ao comando 'escreva' do visualg 
    console.log(inputTarefa)

    // valida se está vazio
    if (tarefa === "") {
        document.getElementById("mensagem").textContent =
            "Digite uma tarefa antes de adicionar!"
        return
    }

    //cria novo item (li) e insere na (lista ul)
    let listaTarefas = document.getElementById("listaTarefas")

    //"li" referece a lista, indica que a variavel novaTarefa vai receber uma lista
    let novaTarefa = document.createElement("li")

    //pegue a variavel novaTarefa e adiciona o que foi escrito no input
    novaTarefa.textContent = tarefa
    
    //adiciona uma nova variavel que foi digitada em 'tarefa' e adiciona abaixo na lista
    listaTarefas.appendChild(novaTarefa)

    //mensagem de tarefa adicionada com sucesso
    let mensagem = "Tarefa adicionada com sucesso!"

    document.getElementById("mensagem").textContent = mensagem

    //limpa o input do usuário
    inputTarefa.value = ""

    document.getElementById("tarefa").value = ""


    // ????
    if (novaTarefatarefa.trim() !== "") 
    tarefa.innerText = campo.value;
        else 
    mensagem.innerText = "";

}