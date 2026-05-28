algoritmo "A Nota do Senai"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

var

    pro_pratico:real
    pro_escrita:real
    
inicio

    escreval("Digite a nota da Prova Pratica: ")
    leia(pro_pratico)
    escreval("Digite a nota da Prova Escrita: ")
    leia(pro_escrita)
    escreval("A Media Ponderada = ", ((pro_pratico * 3) + (pro_escrita * 2)) / 5)
fimalgoritmo