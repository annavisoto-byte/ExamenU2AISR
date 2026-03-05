  document.getElementById('CargarPdf').addEventListener('click', function() {
    
        const pdfInput = document.getElementById('SubirPdf');
        const pdfFile = pdfInput.files[0];

         if (pdfFile) {
            const pdfUrl = URL.createObjectURL(pdfFile);
            console.log(pdfUrl); 
            document.getElementById('MostrarPdf').src = pdfUrl;
        } else {
            alert('Por favor, selecciona un archivo PDF.');
        }
    });

    document.getElementById("boton").addEventListener("click", function() {
        let fecha = document.getElementById("fecha").value;
        alert(" la fecha ingresada es: " + fecha);
        console.log("Botón presionado. Fecha ingresada: " + fecha);
        document.getElementsByTagName("p")[2].innerText = " La fecha ingresada es: " + fecha;
    });