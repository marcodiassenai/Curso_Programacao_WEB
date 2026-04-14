algoritmo "Repetição Senha - meu teste"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

// to fazendo sozinho mas não deu certo

var
    usuario:caractere
    senhadigitada:caractere
    tentativa:inteiro

inicio
    tentativa <- 0

    escreval("Digite o nome de usuário: ")
    leia(usuario)

    se (usuario = admin) entao
        escreval("Login efetuado com sucesso")
    senao
        escreval("Nome de usuario invalido")
    fimse
    
    se (usuario <> admin) entao
        escreval ("Acesso Bloqueado")
    fimse
    
fimalgoritmo