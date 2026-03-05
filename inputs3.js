document.getElementById('CargarContenido').addEventListener('click', function() {

const imageInput = document.getElementById('SubirImagen');
const imageFile = imageInput.files[0];

const audioInput = document.getElementById('SubirAudio');
const audioFile = audioInput.files[0];

const videoInput = document.getElementById('SubirVideo');
const videoFile = videoInput.files[0];


if (imageFile) {

const imageReader = new FileReader();

imageReader.onload = function(e){

const imageUrl = e.target.result;

console.log(imageUrl);

document.getElementById('MostrarImagen').src = imageUrl;

};

imageReader.readAsDataURL(imageFile);

}


if (audioFile) {

const audioUrl = URL.createObjectURL(audioFile);

console.log(audioUrl);

const audioElement = document.createElement("audio");

audioElement.controls = true;

audioElement.src = audioUrl;

document.getElementById("MostrarAudio").innerHTML = "";

document.getElementById("MostrarAudio").appendChild(audioElement);

}


if (videoFile) {

const videoUrl = URL.createObjectURL(videoFile);

console.log(videoUrl);

const videoElement = document.createElement("video");

videoElement.controls = true;

videoElement.width = 400;

videoElement.src = videoUrl;

document.getElementById("MostrarVideo").innerHTML = "";

document.getElementById("MostrarVideo").appendChild(videoElement);

}

});


document.getElementById("boton").addEventListener("click", function(){

let color = document.getElementById("color").value;

alert("El color seleccionado es: " + color);

document.getElementsByTagName("p")[0].innerText = "El color se ha cambiado a " + color;

document.body.style.backgroundColor = color;

});