document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cambiarTexto").addEventListener("click", function () {
        document.getElementById("textoDinamico").textContent = "¡El contenido ha cambiado!";
    });
    document.getElementById("contactoForm").addEventListener("submit", function (event) {
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();
        let errorMensaje = document.getElementById("errorMensaje");
    
        if (nombre === "" || nombre[0] !== nombre[0].toUpperCase()) {
            event.preventDefault();
            errorMensaje.textContent = "El nombre debe iniciar con mayúscula.";
            return;
        }  
     
        if (email === "" || !email.includes("@")) {
            event.preventDefault();
            errorMensaje.textContent = "Ingresa un email válido.";
            return;
        }
    
        if (mensaje.length < 10) {
            event.preventDefault();
            errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
            return;
        }
    
        errorMensaje.textContent = "";
        alert("Formulario enviado correctamente.");
    });
});