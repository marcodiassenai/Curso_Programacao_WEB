algoritmo "Repetição Senha"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

var 
    usuario:caractere
    senhadigitada:caractere
    tentativas:inteiro
    tentativau:inteiro

    
inicio
    //vai ser o numero de tentativa que vai sendo descontadas (atribuição de contadores)
    tentativau <- 0
    tentativas <- 0

    repita
    //o computador entra nesse ponto
        escreval("Digite o usuário: ")
        leia(usuario)

    //contador de repetições, se colocar em "tentativa <- 3" e no contador "tentativa <- tentativa - 3", quer dizer que só terá 3 tentativas para repetir.
    tentativau <- tentativau + 1

        se(usuario <> "admin") entao
            escreval ("Usuário incorreto. Tente novamente.")
        fimse

    //so agora no final ele faz o teste, assim que digitar a senha correta o programa para
    ate(usuario = "admin")
   

    //acrescenta o repita sempre onde o usuario precisa voltar
    repita
    //o computador entra nesse ponto
        escreval("Digite a senha de acesso: ")
        leia(senhadigitada)

    //contador de repetições, se colocar em "tentativa <- 3" e no contador "tentativa <- tentativa - 3", quer dizer que só terá 3 tentativas para repetir.
    tentativas <- tentativas + 1

        se(senhadigitada <> "1234") entao
            escreval ("Senha incorreta. Tente novamente.")
        fimse

    //so agora no final ele faz o teste, assim que digitar a senha correta o programa para de rodar, ou até 3 tentativas
    ate(senhadigitada = "1234") ou (tentativas = 3)
    escreva("Login efetuado com sucesso")

fimalgoritmo