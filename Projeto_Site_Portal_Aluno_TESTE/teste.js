// (tipo, elemento) são parametros que a função ira receber, 
// tipo recebe os escritos dentro dos parenteses que estão acompanhados de 'this'
// elemento recebe toda a função que esta dentro do div do botão
function trocarAba(tipo, elemento){

    //remove classe ativa
    document.querySelectorAll(".aba")
    .forEach(aba => aba.classList.remove("ativa"));

    //ativa clicada
    elemento.classList.add("ativa");

    //criou uma variavel 'conteudo' que vai receber o que tem em conteudo do arquivo html
    let conteudo = document.getElementById("conteudo");

    //
    if(tipo == "todos"){
        conteudo.innerHTML=`
        <h3>Todos os produtos</h3>
        <p>📂 Lista completa dos produtos.</p>
        `;
    }

    if(tipo=="vestuario"){
        conteudo.innerHTML=`
        <h2>Vestuário</h2>
        <p>👕 Camisas, calças, tênis...</p>
        `;
    }

    if(tipo=="eletronico"){
        conteudo.innerHTML=`
        <h2>Eletrônicos</h2>
        <p>💻 Notebook, celular, TV...</p>
        `;
    }

    if(tipo=="alimentos"){
        conteudo.innerHTML=`
        <h2>Alimentos</h2>
        <p>🍎 Frutas, bebidas, comidas...</p>
        `;
    }

}
