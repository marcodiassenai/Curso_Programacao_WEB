algoritmo "Relogio do Servidor"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

var

    segundos:inteiro

inicio

    escreval("Ditite quantos segundos demorou: ")
    leia(segundos)
    escreval("Durou ", (segundos \ 3600), " H ", ((segundos % 3600) / 60))

fimalgoritmo