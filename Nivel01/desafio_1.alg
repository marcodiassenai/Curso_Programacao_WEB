algoritmo "Crachá de Acesso"
// Disciplina  :  Linguagem e Lógica de Programação
// Professor   : Ricardo
// Descrição   : Desafio 01
// Autor(a)    : Marco
// Data atual  : ${DATA_ATUAL}/${MES_ATUAL}/${ANO_ATUAL}
var

    nome_aluno: caractere
    turno: caractere

inicio
    
    //nome_aluno <- "Antonio de Souza"
    //turno <- "Noite"
    //essa atribuição é automatica para não ter que ficar escrevendo os nomes enquanto testa 

    escreval("__________________________________________________________________")
    escreval(" ")
    escreval("-------------- ACESSO RESTRITO A FUNCIONARIOS --------------------")
    escreval("__________________________________________________________________")
    escreval(" ")
    escreval("DIGITE SEU NOME:")
    leia(nome_aluno)
    escreval("INFORME SEU TURNO:")
    leia(turno)
    escreva("Bem Vindo ", nome_aluno, " do turno da ", turno)
    escreval(" ")

fimalgoritmo