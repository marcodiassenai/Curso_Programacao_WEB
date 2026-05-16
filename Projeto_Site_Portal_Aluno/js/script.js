// Vai dar função ao botão 'Cadastrar Produto)
function adicionarTarefa() {

    //criei uma variavel 'nomeProdutoVar' que vai pegar o valor digitado site Nome do Prduto
    let produto = document.getElementById("nome_Produto").value.trim()
    console.log(produto)
       
    let msgCadastro = document.getElementById("msg_Cadastro").textContent = "Produto adicionado a Lista"

    //faz com que o campo do input volte a ficar vazio apos cadastrar o produto
    document.getElementById("nome_Produto").value = ""
    console.log(produto)

    // apaga a mensagem após 2 segundos
    setTimeout(() => { 
    msg_Cadastro.textContent = ""
    }, 2000);
    
    //comando 'if' faz com que se o campo do produto estiver vazio ele não adiciona e aparece uma mensagem informando que é para adiconar um produto
    if (produto === "") {
        document.getElementById("msg_Cadastro").textContent =
            "Digite um Produto para adicionar!"
        return
    }

    let listaProduto = document.getElementById("listaProduto")
    
    let novoProduto = document.createElement("li")
    novoProduto.textContent = produto
    listaProduto.appendChild(novoProduto)

    //let novoProduto = "Produto adicionado a Lista"
    let mensagem = "Produto adicionado a Lista"
    document.getElementById("msgCadastro").textContent = mensagem

}


//função usada para limpar a lista que havia sido criada
function limparFormulario() {
        let limpar = document.getElementById("listaProduto")
        limpar = " "
        document.getElementById("listaProduto").textContent = limpar
        
        console.log(limpar)

}


//Começar a criar as funções dos botões do box menu
function meusprodutos() {
    window.open("./produtos.html", "_black");
}