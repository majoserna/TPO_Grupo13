// INICIO validación formulario //
var form = document.getElementById('form-news');
var nombre = document.getElementById('name');
var email = document.getElementById('email');
var error = document.getElementById("form-error-message");
var sent = document.getElementById('form-sent-message');

error.style.color = 'red';

form.addEventListener('submit', function(event) {
    event.preventDefault()

    var mensajeError = []

    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingresa tu nombre.')
    }
    if(email.value === null || email.value === ''){
        mensajeError.push('Ingresa tu e-mail.')
    }

    error.innerHTML = mensajeError.join(' ')

    return false;
})
