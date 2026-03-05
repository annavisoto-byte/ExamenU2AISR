
function buscar(){

let palabra = document.getElementById("busqueda").value.toLowerCase();

let paginas = [
"pagina1.html",
"pagina2.html",
"pagina3.html",
"pagina4.html",
"pagina5.html",
"pagina6.html",
"pagina7.html",
"pagina8.html"
];

let resultado = document.getElementById("resultado");
resultado.innerHTML = "Buscando...<br>";

paginas.forEach(function(pagina){

fetch(pagina)
.then(res => res.text())
.then(data => {

if(data.toLowerCase().includes(palabra)){
resultado.innerHTML += "La palabra aparece en: " + pagina + "<br>";
}

});

});

}
