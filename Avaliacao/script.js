
let vidas = 7;
let tempoSegundos = 3000;
let jogoAcabou;
let cronometroInterval;
let tentativasCheats = 0;
let tentativasExecucao = 0;


const codigoDesafio = `function inserirLembrete() {
   
    let campoDeDigitacao = document.getElementById("textoDigitado");    
    
    let novoItemVisual = document.getElementById("li");

    let textoDoUsuario = campoDeDigitacao;

    if (textoDoUsuario !== "") {
        let listaDestino = document.getElementById("painelDeItens");

        novoItemVisual.innerText = textoDoUsuario;

            listaDestino.Child(novoItemVisual)

        document.getElementById("alertaSistema").innerText = "Item salvo com sucesso!";
        
    } else {
        alert("Ei! Você precisa digitar algo antes de salvar.");
    }
}`;

window.onload = () => {
    const editor = document.getElementById("editorCodigo");
    editor.value = codigoDesafio;

    carregarEstadoDoJogo();


    editor.addEventListener('contextmenu', e => {
        e.preventDefault();
        punirTrapaca("Uso do botão direito (Context Menu)");
    });


    editor.addEventListener('paste', e => {
        e.preventDefault();
        punirTrapaca("Tentativa de colar código (Paste)");
    });

    editor.addEventListener('copy', e => {
        e.preventDefault();
        punirTrapaca("Tentativa de copiar código (Copy)");
    });

    editor.addEventListener('cut', e => {
        e.preventDefault();
        punirTrapaca("Tentativa de recortar código (Cut)");
    });

    // Bloqueia a troca de abas (o aluno sai da aba da prova para pesquisar no Google/ChatGPT)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && !jogoAcabou) {
            punirTrapaca("Troca de aba ou janela detectada");
        }
    });

    // Punição furtiva caso o aluno tente atualizar a página (F5) para tentar burlar o relógio
    window.addEventListener('beforeunload', () => {
        if (!jogoAcabou) {
            tentativasCheats++;
            tempoSegundos -= 300; // Subtrai 5 minutos sem dar alert (não pode dar alert no unload)
            if (tempoSegundos < 0) tempoSegundos = 0;
            salvarEstadoDoJogo();
        }
    });

    if (!jogoAcabou) {
        iniciarCronometro();
    }
};

// Função responsável por aplicar a punição de -5 minutos no relógio do aluno
function punirTrapaca(motivo) {
    if (jogoAcabou) return;
    
    tentativasCheats++;
    tempoSegundos -= 300; // Subtrai 300 segundos (5 minutos)
    
    if (tempoSegundos < 0) tempoSegundos = 0; // Garante que o relógio não fique negativo
    
    atualizarDisplayCronometro(); // Atualiza na tela a perda de tempo instantaneamente
    salvarEstadoDoJogo();
    
    // Dispara o alerta para dar o "susto" no aluno
    alert(`🚨 ALERTA DE SISTEMA ANTI-FRAUDE 🚨\n\nAção Bloqueada: ${motivo}\n\nPenalidade: Você perdeu 5 MINUTOS do seu tempo total!`);
    
    if (tempoSegundos <= 0 && !jogoAcabou) {
        falhou("O TEMPO ESGOTOU DEVIDO A PUNIÇÕES POR TRAPAÇA!");
    }
}

function carregarEstadoDoJogo() {
    const estadoSalvo = JSON.parse(localStorage.getItem('estadoJogoBugs'));

    if (estadoSalvo) {
        vidas = estadoSalvo.vidas;
        tempoSegundos = estadoSalvo.tempoSegundos;
        jogoAcabou = estadoSalvo.jogoAcabou;
        tentativasCheats = estadoSalvo.tentativasCheats || 0;
        tentativasExecucao = estadoSalvo.tentativasExecucao || 0;


        if (estadoSalvo.codigoAluno) {
            document.getElementById("editorCodigo").value = estadoSalvo.codigoAluno;
        }

        if (jogoAcabou) {
            if (vidas > 0 && tempoSegundos > 0) {

                document.getElementById("editorCodigo").disabled = true;
                document.querySelector(".left-panel").style.background = "#dcfce7";

                injetarScript(estadoSalvo.codigoAluno);
                liberarInterface();
            } else {
                alert("Este desafio já falhou. Chame o professor.");
                document.getElementById("editorCodigo").disabled = true;
            }
        }
    } else {

        vidas = 7;
        tempoSegundos = 3000;
        jogoAcabou = false;
        tentativasCheats = 0;
        tentativasExecucao = 0;
    }


    document.getElementById("contadorVidas").innerText = vidas;
    atualizarDisplayCronometro();
}

function salvarEstadoDoJogo() {

    const codigoAluno = document.getElementById("editorCodigo").value;
    localStorage.setItem('estadoJogoBugs', JSON.stringify({ vidas, tempoSegundos, jogoAcabou, codigoAluno, tentativasCheats, tentativasExecucao }));
}

function injetarScript(codigo) {
    const scriptAntigo = document.getElementById("scriptInjetadoAluno");
    if (scriptAntigo) scriptAntigo.remove();

    const novoScript = document.createElement("script");
    novoScript.id = "scriptInjetadoAluno";
    novoScript.text = codigo;

    document.body.appendChild(novoScript);
}

function liberarInterface() {

    const btnAdicionar = document.getElementById("btnAdicionar");
    btnAdicionar.onclick = () => {
        if (typeof inserirLembrete === "function") {
            inserirLembrete();
        }
    };


    const btnTestar = document.querySelector(".btn-testar");
    if (btnTestar) {
        btnTestar.disabled = true;
        btnTestar.innerText = "Desafio Concluído! Interface Liberada 🚀";
        btnTestar.style.backgroundColor = "#10b981";
        btnTestar.style.color = "white";
    }


    document.getElementById("entradaTexto").value = "";
    document.getElementById("painelDeItens").innerHTML = "";
    document.getElementById("alertaSistema").innerText = "";
}


function acionarTeste() {
    if (jogoAcabou) return alert("Jogo finalizado. Chame o professor.");

    tentativasExecucao++;
    salvarEstadoDoJogo();

    const codigoAluno = document.getElementById("editorCodigo").value;

    try {
        injetarScript(codigoAluno);
    } catch (e) {
        return falhou("Erro de sintaxe no seu código! Verifique se falta chaves } ou ponto e vírgula.");
    }


    try {

        document.getElementById("entradaTexto").value = "Teste do Robô Juiz";

        document.getElementById("painelDeItens").innerHTML = "";
        inserirLembrete();
    } catch (e) {
        console.error(e);
        return falhou("Erro de Execução! A função quebrou. Verifique os IDs (BUG 1) ou se está tentando usar um elemento que não existe (BUG 2).");
    }


    const lista = document.getElementById("painelDeItens").innerHTML;

    if (lista.includes("[object HTMLInputElement]")) {
        return falhou("O texto '[object HTMLInputElement]' apareceu na lista! Você pegou o elemento em vez do valor dele. Conserte o BUG 3.");
    }

    if (!lista.includes("Teste do Robô Juiz")) {

        return falhou("O item não apareceu na lista HTML! Verifique se está criando o elemento corretamente (BUG 2) e se o está anexando (BUG 4).");
    }


    jogoAcabou = true;
    salvarEstadoDoJogo();
    clearInterval(cronometroInterval);
    document.querySelector(".left-panel").style.background = "#dcfce7";
    liberarInterface();
    gerarRelatorio("SUCESSO");
    alert("🎉 PARABÉNS! VOCÊ CONSERTOU TODOS OS BUGS! A interface agora está liberada para você usar livremente.");
}

function falhou(motivo) {
    vidas--;
    if (vidas < 0) vidas = 0;

    document.getElementById("contadorVidas").innerText = vidas;

    if (vidas <= 0) {
        jogoAcabou = true;
        clearInterval(cronometroInterval);
        gerarRelatorio("FALHA");
        alert("💀 FIM DE JOGO! Suas vidas acabaram. Para reiniciar, limpe o armazenamento do navegador.");
    } else {
        alert("❌ FALHOU: " + motivo);
    }

    salvarEstadoDoJogo();
}

function atualizarDisplayCronometro() {
    if (tempoSegundos < 0) tempoSegundos = 0;
    let min = Math.floor(tempoSegundos / 60).toString().padStart(2, '0');
    let seg = (tempoSegundos % 60).toString().padStart(2, '0');
    document.getElementById("cronometro").innerText = `${min}:${seg}`;
}

function iniciarCronometro() {
    cronometroInterval = setInterval(() => {
        if (jogoAcabou) return clearInterval(cronometroInterval);

        tempoSegundos--;
        atualizarDisplayCronometro();
        salvarEstadoDoJogo();

        if (tempoSegundos <= 0) {
            falhou("O TEMPO ESGOTOU! Falha na missão.");
        }
    }, 1000);
}


function gerarRelatorio(resultado) {
    let tempoGasto = 3000 - tempoSegundos;
    let minGasto = Math.floor(tempoGasto / 60).toString().padStart(2, '0');
    let segGasto = (tempoGasto % 60).toString().padStart(2, '0');

    let conteudo = `=======================================================\n`;
    conteudo += `           RELATÓRIO DE DESEMPENHO DO ALUNO            \n`;
    conteudo += `=======================================================\n\n`;
    conteudo += `Status da Missão: ${resultado}\n`;
    conteudo += `Tempo Gasto: ${minGasto} minutos e ${segGasto} segundos (de 30:00)\n`;
    conteudo += `Vidas Restantes: ${vidas} de 5\n`;
    conteudo += `Tentativas de Código (Vezes que clicou em Testar): ${tentativasExecucao}\n`;
    conteudo += `Tentativas de Burlar (Copiar/Colar/Click Direito): ${tentativasCheats}\n\n`;
    conteudo += `=======================================================\n`;
    conteudo += `                  CÓDIGO FINAL DO ALUNO                \n`;
    conteudo += `=======================================================\n\n`;
    conteudo += document.getElementById("editorCodigo").value + "\n";


    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Relatorio_Desafio_${resultado}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
