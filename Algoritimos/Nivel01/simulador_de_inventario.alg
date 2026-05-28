algoritmo "Simulador de Inventário"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

var

    item:caractere
          
inicio

    escreval("Digite o nome do 1º item ")
    leia(item)
    escreval("Item 1 Registrado: ", item)
    escreval("Digite o nome do 2º item")
    leia(item)
    escreval("Item 1 descartado. Item 2 registrado: ", item)
    item <- "Vazio"
    //linha superior foi atribuida para poder zerar o valor que havia sido definodo para o Item
    escreval("Inventario resetado, Valor atual: ", item) 


fimalgoritmo