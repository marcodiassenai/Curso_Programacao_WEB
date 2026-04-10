algoritmo "Desvio de Fluxo de Dados"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

var

    aluno:caractere
    professor:caractere
    reserva:caractere

inicio

    escreval("Digite o nome do Aluno: ")
    leia(aluno)
    escreval("Digite o nome do Professor: ")
    leia(professor)
    reserva <- aluno
    aluno <- professor
    professor <- reserva
    escreval("O Aluno se chama: ", aluno, ", e o nome do Professor é: ", professor)
    

fimalgoritmo
