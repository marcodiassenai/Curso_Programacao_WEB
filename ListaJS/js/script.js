//Variável para capturar o valor do input
function adicionarMensagem() {
    let input = document.getElementById("inputTarefa");
    let mensagem = input.value;
    // let mensagem = input.value
    document.getElementById("mensagem").textContent = mensagem
        
    }
    



// Esse Script era pra fazer aparecer a msg abaixo do botão depois que clicava nele
//function adicionarMensagem() {
                 
    //let é como se fosse uma variavel que a linha abaixo vai puxar para ser usada 
    //let mensagem = "Tarefa adicionada com sucesso!"
    //document.getElementById("mensagem").textContent = mensagem
//}
