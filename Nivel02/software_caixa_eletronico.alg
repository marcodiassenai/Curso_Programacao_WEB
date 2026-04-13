algoritmo "O Software do Caixa Eletrônico"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

var

   valor:real
   
inicio

    //valor <- 477
    escreval("Digite o valor do saque: ")
    leia(valor)
    escreval("Notas de 100 = ", valor \ 100)
    escreval("Notas de 50 = ", (valor % 100) \ 50)
    escreval("Notas de 20 = ", ((valor % 100) % 50) \ 20)
    escreval("Notas de 10 = ", (((valor % 100) % 50) % 20) \ 10)
    escreval("Notas de 5 = ", ((((valor % 100) % 50) % 20) % 10) \ 5)
    escreval("Notas de 1 = ", (((((valor % 100) % 50) % 20) % 10) % 5) \ 1)


fimalgoritmo