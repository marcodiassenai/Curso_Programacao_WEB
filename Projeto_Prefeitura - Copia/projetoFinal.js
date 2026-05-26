/* ANIMAÇÃO OPCIONAL */

const categorias =
document.querySelectorAll(".category");

categorias.forEach(categoria => {

    categoria.addEventListener("mouseenter", () => {

        categoria.style.transition =
        "0.3s";

    });

});



/* // novo mapa openmaps --> esse mapa usa a area total de um mapa
var mapa = L.map('map', {
    zoomControl: false
}).setView([-21.1356, -44.2617], 16);

// adiciona zoom no lado direito
L.control.zoom({
    position: 'topright'
}).addTo(mapa);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(mapa); */



// limites aproximados de São João del-Rei
const limitesSJDR = [
    [-21.45, -44.65], // sudoeste (mais aberto)
    [-20.80, -43.90]  // nordeste (mais aberto)
        
];

var mapa = L.map('map', {
    zoomControl: false,
    maxBounds: limitesSJDR,
    maxBoundsViscosity: 1.0
}).setView([-21.1356, -44.2617], 16);

mapa.setMinZoom(13);
mapa.setMaxZoom(18);

// zoom no lado direito
L.control.zoom({
    position: 'topright'
}).addTo(mapa);

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: '&copy; OpenStreetMap'
}).addTo(mapa);




/* PROBLEMAS EXEMPLO */

const problems = [

{
coords:[-21.1362,-44.2558],
text:"Buraco na Via"
},

{
coords:[-21.1312,-44.2665],
text:"Faixa Apagada"
},

{
coords:[-21.1404,-44.2602],
text:"Acúmulo de Lixo"
},

{
coords:[-21.1254, -44.2392],
text:"Homem precisando trabalhar"
}

];

/* MARCADORES */

problems.forEach(problem => {

L.marker(problem.coords)

.addTo(mapa)

.bindPopup(`

<strong>${problem.text}</strong>

<br><br>

Protocolo: SJDR-2026

`);

});

/* MODAL */

const modal =
document.getElementById("modal");

document
.getElementById("openModal")
.onclick = () => {

modal.style.display = "flex";

};

document
.getElementById("closeModal")
.onclick = () => {

modal.style.display = "none";

};

/* CLIQUE MAPA */

mapa.on("click",(e)=>{

modal.style.display = "flex";

console.log(
e.latlng.lat,
e.latlng.lng
);

});

/* ENVIAR */

document
.getElementById("sendProblem")
.onclick = ()=>{

alert(
"Ocorrência enviada com sucesso!\n\nProtocolo: SJDR-2026-001"
);

modal.style.display = "none";

};
