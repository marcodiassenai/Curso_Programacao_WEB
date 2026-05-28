<?php 
// Inclui o script central. Ele já tem o session_start() lá dentro!
// Ao incluir o script, nós ganhamos acesso à função exibirTarefas().
include 'script.php'; 
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova aba</title>
    <link rel="stylesheet" href="style.css">
</head>
    <body>
        <div class="container2">
            <h1>Lista de Tarefas</h1>
            
            <!-- Esta <ul> vai receber as <li> que o nosso PHP gerar -->
            <ul id="listaTarefasnova">
                <!-- O PHP entra em ação aqui, injetando as tarefas salvas diretamente no HTML -->
                <?php exibirTarefas(); ?>
            </ul>
            
        </div>
    </body>
</html>