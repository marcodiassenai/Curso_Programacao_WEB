algoritmo "Desafio 2"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

var
    nome:caractere
    idade:inteiro
    email:caractere
    valor:real
    experiencia:logico

inicio

    //experiencia <- verdadeiro

    escreval("Digite seu nome")
    leia(nome)
    escreval("Qual a sua idade")
    leia(idade)
    escreval("Digite seu email")
    leia(email)
    escreval("Qual o valor da Bolsa Auxilio")
    leia(valor)
    escreval("Você possui experiencia?")
    leia(experiencia)
        se (experiencia = "sim") entao
            escreval ("Voce esta empregado")
        senao
            escreval ("Tente outra coisa")
        fimse

    fimalgoritmo