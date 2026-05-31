const objs = [
    {
        "nome": "Marco",
        "idade": 43,
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "profissao": "Programador",
            "empresa": "Empresa X",
        },
        "hobbies": ["programar", "jogar", "viajar"]
    },

    {
        "nome": "João",
        "idade": 25,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": null,
            "empresa": null,
        },
        "hobbies": ["Academia", "jogar"]
    },
]

console.log(objs)


//JSON
//Converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)


//converter JSON para objeto
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})