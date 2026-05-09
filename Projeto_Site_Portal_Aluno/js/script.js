// Vai dar função ao botão 'Cadastrar Produto)
function adicionarTarefa() {

    //criei uma variavel 'nomeProdutoVar' que vai pegar o valor digitado site Nome do Prduto
    let produto = document.getElementById("nome_Produto").value
    console.log(produto)
   

    let msgCadastro = document.getElementById("msg_Cadastro").textContent = "Produto adicionado a Lista"
    
    console.log(produto)

    let listaProduto = document.getElementById("listaProduto")

    let novoProduto = document.createElement("li")
    novoProduto.textContent = produto
    listaProduto.appendChild(novoProduto)

    //let novoProduto = "Produto adicionado a Lista"
    let mensagem = "Produto adicionado a Lista"
    document.getElementById("msgCadastro").textContent = mensagem
    produto.value = ""

}