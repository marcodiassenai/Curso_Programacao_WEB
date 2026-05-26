
function fazerLogin(event){

    // impede recarregar a página
    event.preventDefault();

    let email =
    document.getElementById("email").value;

    let senha =
    document.getElementById("senha").value;

    // usuário de teste
    if(
        email === "teste@teste.com"
        &&
        senha === "1234"
    ){

        alert("Login realizado com sucesso!");

        // redireciona para a página
       window.location.href = "../projetoFinal.html";

    }

    else{

        alert(
            "Email ou senha incorretos!"
        );

    }

}
