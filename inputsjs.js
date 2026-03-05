document.getElementById("boton").addEventListener("click", function() {

let correo = document.getElementById("correo").value;
let contraseña = document.getElementById("contraseña").value;

alert(" el correo ingresado es: " + correo + " la contraseña ingresada es: " + contraseña);

console.log("Botón presionado. Correo ingresado: " + correo);
console.log("Botón presionado. Contraseña ingresada: " + contraseña);

document.getElementsByTagName("p")[0].innerText = " El correo electrónico ingresado es: " + correo;
document.getElementsByTagName("p")[1].innerText = " La contraseña ingresada es: " + contraseña;

});

   document.getElementById('CargarContenido').addEventListener('click', function() {
        const fileInput = document.getElementById('SubirArchivo');
        const file = fileInput.files[0];

          if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const contents = e.target.result;
                console.log(contents); 
                document.getElementById('MostrarContenido').textContent = contents;
            };
            reader.readAsText(file);
        } else {
            alert('Por favor, selecciona un archivo.');
        }
    });

