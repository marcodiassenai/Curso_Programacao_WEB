algoritmo "Login_VisuAlg"
var
    user: caractere
    senha: caractere
    tentativa_user: caractere
    tentativa_senha: caractere
    contador: inteiro
inicio
    user <- "admin"
    senha <- "1234"
    contador <- 0

    repita
        escreva("Digite o Usuário: ")
        leia(tentativa_user)
        contador <- contador + 1
        
        se (tentativa_user = user) entao
            contador <- 0 // Zera o contador para as tentativas de senha

            repita
                escreva("Digite a senha: ")
                leia(tentativa_senha)
                contador <- contador + 1
                
                se (tentativa_senha = senha) entao
                    escreval("Acesso Liberado!")
                senao
                    escreval("Senha incorreta!")          
                fimse
            ate (tentativa_senha = senha) ou (contador = 3)
            
            se (tentativa_senha <> senha) entao
                escreval("Conta Bloqueada por erro de senha!")          
            fimse
        fimse

    ate (tentativa_user = user) ou (contador = 3)
    
    se (tentativa_user <> user) entao
        escreval("Conta Bloqueada por erro de usuário!")
    fimse

fimalgoritmo