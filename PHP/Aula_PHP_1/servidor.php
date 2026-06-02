<?php
// =========================================================================
// API REST (Nosso Servidor Backend em PHP)
// =========================================================================

// 1. INICIALIZAÇÃO (Inicia a sessão do servidor)
session_start();

// 2. CABEÇALHO DE RESPOSTA (Define o formato de retorno como JSON)
// Isso é essencial para o JavaScript (Frontend) conseguir ler e interpretar os dados
header('Content-Type: application/json');

// Inicializa o armazenamento (lista de tarefas) se ele ainda não existir na sessão
if (!isset($_SESSION['lista_tarefas'])) {
    $_SESSION['lista_tarefas'] = [];
}

// 3. ROTEAMENTO (Verifica o método da requisição: GET ou POST)
$metodo = $_SERVER['REQUEST_METHOD'];

// =========================================================================
// SITUAÇÃO A: O cliente está ENVIANDO uma tarefa nova (script.js faz um POST)
// =========================================================================
if ($metodo === 'POST') {
    
    // ATENÇÃO ALUNOS: Como o JavaScript enviou os dados empacotados em JSON
    // (via fetch com JSON.stringify), a variável $_POST padrão do PHP fica vazia.
    // O Servidor precisa ler o "pacote de dados bruto" (payload) recebido na requisição:
    $pacote_recebido = file_get_contents('php://input');
    
    // Transforma o pacote JSON em um Array que o PHP consegue entender
    $dados = json_decode($pacote_recebido, true);

    // Valida se a 'tarefa' existe dentro do pacote e se não está vazia
    if (isset($dados['tarefa']) && trim($dados['tarefa']) !== "") {
        
        // Guarda na sessão (persiste o dado no armazenamento temporário do servidor)
        $_SESSION['lista_tarefas'][] = trim($dados['tarefa']);
        
        // Responde ao JavaScript com uma mensagem de sucesso, em JSON
        echo json_encode(["mensagem" => "Tarefa registrada no servidor com sucesso!"]);
        
    } else {
        // Responde ao JavaScript com uma mensagem de erro
        echo json_encode(["mensagem" => "A tarefa estava vazia!"]);
    }
}

// =========================================================================
// SITUAÇÃO B: O cliente está PEDINDO para ver as tarefas (nova_aba.js faz um GET)
// =========================================================================
elseif ($metodo === 'GET') {
    
    // O Servidor simplesmente recupera a lista da sessão e a retorna no formato JSON
    echo json_encode($_SESSION['lista_tarefas']);
    
}
?>