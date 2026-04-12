algoritmo "Estrutura Se ou Entao - Video 36"

var
    idade:inteiro
    anonascimento:inteiro


inicio
    escreval("Digite o seu ano de nascimento: ")
    leia(anonascimento)
    idade <- 2021 - anonascimento
    escreval("Sua idade é: ", idade)
    se idade >= 18 entao
        escreval("O individuo é maior de idade")
    senao
        escreval("O individuo é menor de idade")
    fimse

        
fimalgoritmo