function trocarAba(tipo, elemento){

    //remove classe ativa
    document.querySelectorAll(".aba")
    .forEach(aba => aba.classList.remove("ativa"));

    //ativa clicada
    elemento.classList.add("ativa");

    let conteudo=document.getElementById("conteudo");

    if(tipo=="todos"){
        conteudo.innerHTML=`
        <h2>Todos os produtos</h2>
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
