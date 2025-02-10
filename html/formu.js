// Esperar a que el documento esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    
    // Capturar el formulario y los campos de entrada
    const form = document.querySelector('form');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');
    const errorSpans = document.querySelectorAll('.error');

    // Función para validar el campo de nombre
    function validarNombre() {
        const nombre = nombreInput.value.trim();
        if (nombre === '') {
            mostrarError(nombreInput, 'El nombre es obligatorio.');
            return false;
        } else if (nombre.length < 3) {
            mostrarError(nombreInput, 'El nombre debe tener al menos 3 caracteres.');
            return false;
        } else {
            limpiarError(nombreInput);
            return true;
        }
    }

    // Función para validar el campo de email
    function validarEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            mostrarError(emailInput, 'El correo electrónico es obligatorio.');
            return false;
        } else if (!emailRegex.test(email)) {
            mostrarError(emailInput, 'El correo electrónico no es válido.');
            return false;
        } else {
            limpiarError(emailInput);
            return true;
        }
    }

    // Función para validar el campo de mensaje
    function validarMensaje() {
        const mensaje = mensajeInput.value.trim();
        if (mensaje === '') {
            mostrarError(mensajeInput, 'El mensaje es obligatorio.');
            return false;
        } else if (mensaje.length < 10) {
            mostrarError(mensajeInput, 'El mensaje debe tener al menos 10 caracteres.');
            return false;
        } else {
            limpiarError(mensajeInput);
            return true;
        }
    }

    // Función para mostrar el error
    function mostrarError(input, mensaje) {
        const span = input.nextElementSibling;
        span.textContent = mensaje;
        span.style.color = 'red';
    }

    // Función para limpiar el error
    function limpiarError(input) {
        const span = input.nextElementSibling;
        span.textContent = '';
    }

    // Evento que valida los campos antes de enviar el formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe directamente

        const esNombreValido = validarNombre();
        const esEmailValido = validarEmail();
        const esMensajeValido = validarMensaje();

        // Si todo es válido, se puede enviar el formulario
        if (esNombreValido && esEmailValido && esMensajeValido) {
            alert('Formulario enviado correctamente.');
            form.submit(); // Envía el formulario si pasa todas las validaciones
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    });

    // Validaciones en tiempo real cuando el usuario escribe
    nombreInput.addEventListener('input', validarNombre);
    emailInput.addEventListener('input', validarEmail);
    mensajeInput.addEventListener('input', validarMensaje);
});
