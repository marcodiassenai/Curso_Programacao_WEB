algoritmo "O Sensor do Servidor"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : Ricardo
// Autor(a)    : Marco

var 

    temperatura:real

inicio

    escreval("Ditite a temperatura atual do servidor: ")
    leia(temperatura)
    
    //primeira verificação :
    se (temperatura <= 20) entao
        escreval ("Status: Climatização ideal.") 
    senao
        //senão é menor ou igual, ele caia aqui e faça uma nova pergunta
        se (temperatura <= 25) entao
            escreval ("Status: Normal, Atenção.")
        senao
            //qual numero acima de 26
            se (temperatura > 25) entao
                escreval ("Status: Perigo! Servidor superaquecendo.")
            fimse
        fimse
    fimse

fimalgoritmo