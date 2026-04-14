algoritmo "Desafio das 3 crianças"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

var
    resposta:inteiro
    
inicio
    escreval("Pergunta 1: Quem é a criança que gosta de suco de laranja: ")
    escreval("[ 1 ] Talita")
    escreval("[ 2 ] Lucas")
    escreval("[ 3 ] Catarina")
    escreva("RESPOSTA = ")
    leia(resposta)

    se (resposta = 2) entao
        escreval("Certa resposta")

        escreval("-----------------------------------------------------------")       
        escreval("Pergunta 2: Quem é a criança que gosta de suco de Maracujá")
        escreval("[ 1 ] Talita")
        escreval("[ 2 ] Lucas")
        escreval("[ 3 ] Catarina")
        escreva("RESPOSTA = ")
        leia(resposta)
    fimse

        se (resposta = 3) entao
            escreval("Certa resposta")
            escreval("-----------------------------------------------------------") 
    senao
        escreval("Que pena! Você errou")
    fimse

fimalgoritmo