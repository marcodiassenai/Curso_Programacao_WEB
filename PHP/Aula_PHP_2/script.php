<?php
// REGRA DE OURO: Iniciamos a sessão aqui, no topo absoluto do arquivo.
// ATENÇÃO ALUNOS: A $_SESSION é como se fosse o 'localStorage' do JavaScript,
// mas os dados ficam guardados no SERVIDOR. Ela serve para compartilhar 
// dados entre várias páginas (como a index.php e a new_aba.php).
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$mensagem = ""; // Variável global para a mensagem da tela inicial

// ------------------------------------------------------------------
// LÓGICA 1: PROCESSAR O FORMULÁRIO (Adicionar Tarefa)
function enviarTarefa() {
    // Avisamos ao PHP que queremos usar a variável $mensagem que está LÁ FORA da função.
    // Sem isso, a mensagem de sucesso não chega até o HTML.
    global $mensagem;

    // ------------------------------------------------------------------
    // Passo 1: Verifica se o formulário foi enviado pelo método POST 
    // e se o botão 'btnEnviar' foi realmente clicado.
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['btnEnviar'])) {
        
        // Passo 2: Pega o texto digitado. O '??' significa "se não tiver nada, recebe vazio".
        $tarefaDigitada = $_POST['tarefa'] ?? '';

        // Passo 3: Validação. O 'trim' remove espaços em branco antes e depois da palavra.
        // 'empty' verifica se a variável está vazia. O '!' inverte, então significa "Se NÃO estiver vazia".
        if (!empty(trim($tarefaDigitada))) {
            
            // Usamos colchetes [] vazios para empurrar (push) a nova tarefa para o final da nossa lista (Array) na sessão.
            $_SESSION['lista_tarefas'][] = $tarefaDigitada;
            $mensagem = "Tarefa enviada com sucesso!";
            
        } else {
            $mensagem = "Digite uma tarefa válida!";
        }
    }
}

// ------------------------------------------------------------------
// LÓGICA 2: RENDERIZAR A LISTA (Para a nova aba)
// ------------------------------------------------------------------
// Criamos uma função que será chamada lá no HTML da nova aba
function exibirTarefas() {
    // Verifica se a lista existe na sessão E se ela tem pelo menos 1 item cadastrado
    if (isset($_SESSION['lista_tarefas']) && count($_SESSION['lista_tarefas']) > 0) {
        
        // O laço 'foreach' (para cada) percorre a nossa lista inteira.
        // Para cada item dentro de 'lista_tarefas', ele apelida temporariamente de '$tarefa'.
        foreach ($_SESSION['lista_tarefas'] as $tarefa) {
            // 'htmlspecialchars' é uma proteção de segurança contra injeção de código malicioso.
            echo "<li>" . htmlspecialchars($tarefa) . "</li>";
        }
    } else {
        // Caso a lista esteja vazia, mostramos uma mensagem padrão.
        echo "<li>Nenhuma tarefa cadastrada ainda.</li>";
    }
}
?>