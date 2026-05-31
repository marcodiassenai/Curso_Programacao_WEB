const fs = require('fs');

// Função para ler o banco de dados atual
function lerBanco() {
    const dadosRaw = fs.readFileSync('db.json', 'utf8');
    return JSON.parse(dadosRaw);
}

// Função para salvar os dados atualizados no arquivo
function salvarBanco(dados) {
    // O JSON.stringify com os parâmetros null e 2 serve para deixar o arquivo JSON formatado (bonito)
    fs.writeFileSync('db.json', JSON.stringify(dados, null, 2), 'utf8');
}

// Função principal para cadastrar um novo usuário
function cadastrarUsuario(nome, email) {
    // 1. Ler os dados atuais do banco
    const banco = lerBanco();

    // 2. Criar o novo objeto de usuário
    const novoUsuario = {
        id: banco.usuarios.length + 1, // Gera um ID simples baseado no tamanho da lista
        nome: nome,
        email: email,
        dataCadastro: new Date().toISOString()
    };

    // 3. Adicionar o novo usuário à lista existente
    banco.usuarios.push(novoUsuario);

    // 4. Salvar o banco de dados atualizado
    salvarBanco(banco);

    console.log(`Sucesso: Usuário ${nome} foi cadastrado!`);
}

// --- TESTANDO O CADASTRO ---
// Toda vez que você rodar o script, esses cadastros serão adicionados
cadastrarUsuario("Ana Silva", "ana@email.com");
cadastrarUsuario("Carlos Souza", "carlos@email.com");