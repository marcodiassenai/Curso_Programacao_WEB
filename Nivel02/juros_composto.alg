algoritmo "Juros Composto"
// Disciplina  : Linguagem e Lógica de Programação]
// Professor   : Ricardo
// Autor(a)    : Marco

var

    cap_inicial:real
    taxa_jurosmensal:real
    tempo:inteiro

inicio
    cap_inicial <- 1000.00
    escreval("Digite o valor investido: ")
    escreval("Ditite a taxa de juros mensal: ")
    leia(taxa_jurosmensal)
    escreval("Digite quantos meses sera o investimento: ")
    leia(tempo)
    escreval("O valor sera de: ", cap_inicial * (1 + taxa_jurosmensal) ^ tempo)


fimalgoritmo