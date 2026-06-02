const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const ARQUIVO = './db.json';

// Rota para cadastrar usuários
app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;

    fs.readFile(ARQUIVO, 'utf8', (err, data) => {
        if (err) return res.status(500).send("Erro ao ler banco de dados.");

        const json = JSON.parse(data);
        
        // Adiciona o novo objeto {nome, email, senha} na lista de usuários
        json.usuarios.push(novoUsuario);

        fs.writeFile(ARQUIVO, JSON.stringify(json, null, 2), (err) => {
            if (err) return res.status(500).send("Erro ao salvar dados.");
            res.status(200).json({ mensagem: "Salvo com sucesso!" });
        });
    });
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
