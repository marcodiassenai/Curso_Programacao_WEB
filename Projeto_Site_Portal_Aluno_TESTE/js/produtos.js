function mostrarProdutoV() {
    let dados = localStorage.getItem("produtoSalvo");

    let separado = dados.split("|");

    let produtoNovo = document.getElementById("listaProdutoV")

    produtoNovo.textContent = dados

    produtoNova.appendChild(produtoNovo)

    let nome = separado[0];
    let categoria = separado[1];

    console.log(nome);
    console.log(categoria)
}

function mostrarProdutoE() {
    let dados = localStorage.getItem("produtoSalvo");

    let separado = dados.split("|");

    let produtoNovo = document.getElementById("listaProdutoE")

    produtoNovo.textContent = dados

    produtoNova.appendChild(produtoNovo)

    let nome = separado[0];
    let categoria = separado[1];

    console.log(nome);
    console.log(categoria)
}

function mostrarProdutoA() {
    let dados = localStorage.getItem("produtoSalvo");

    let separado = dados.split("|");

    let produtoNovo = document.getElementById("listaProdutoA")

    produtoNovo.textContent = dados

    produtoNova.appendChild(produtoNovo)

    let nome = separado[0];
    let categoria = separado[1];

    console.log(nome);
    console.log(categoria)
}