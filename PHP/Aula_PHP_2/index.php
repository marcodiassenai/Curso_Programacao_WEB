<?php 
// Passo 1: O comando 'include' traz toda a lógica do arquivo script.php para cá.
// É como se estivéssemos copiando e colando o código de lá aqui dentro.
include 'script.php'; 

// Passo 2: Chamamos a função para que ela processe o formulário.
// Toda vez que a página carrega, ela tenta ver se o usuário enviou alguma nova tarefa.
enviarTarefa(); 
?>
<!DOCTYPE html> 
<html lang="pt-BR"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas</title>
    <link rel="stylesheet" href="style.css">
</head>
    <body> 
        <div class="container">
            <h1>Lista de Tarefas</h1>
            <p>Adicione suas tarefas!</p>
            
            <!-- ATENÇÃO ALUNOS: O formulário usa o método POST (seguro e oculto).
                 O 'action=""' vazio significa que ele vai enviar os dados para esta MESMA página. -->
            <form method="POST" action="">
                <!-- O PHP vai usar o atributo name="tarefa" para capturar este campo -->
                <input type="text" name="tarefa" id="inputTarefa" placeholder="Digite a sua tarefa">
                
                <div>
                    <!-- Aqui usamos um pequeno bloco de PHP para imprimir a variável $mensagem.
                         O 'isset' verifica se a variável existe antes de tentar imprimi-la. -->
                    <p id="mensagem"><?php echo isset($mensagem) ? $mensagem : ""; ?></p>
                </div>

                <!-- O botão também precisa de um 'name' para o PHP saber que ele foi clicado -->
                <button type="submit" name="btnEnviar">Adicionar Tarefa</button>
            </form>

            <div>
                <!-- Link que abre o arquivo 'new_aba.php' em uma nova guia -->
                <a href="new_aba.php" target="_blank" class="link-aba">Abrir Aba da Lista</a>
            </div>
        </div>
    </body>
</html>