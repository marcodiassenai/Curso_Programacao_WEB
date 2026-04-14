algoritmo "O Sistema de Login"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

var
    usuario, senha:caractere
    

inicio
    escreval("Digite o nome de usuário: ")
    leia(usuario)
    escreval("Digite a senha: ")
    leia(senha)

    //se o usuario for diferente de admin vai dar msg de erro (foi colocado as duas condições em uma measma linha)
    se (usuario = "admin") e (senha = "senai123") entao
        escreval("Login efetuado com sucesso! Seja bem vindo")
    senao
        escreval ("Erro: Credenciais inválidas.")
    fimse


fimalgoritmo