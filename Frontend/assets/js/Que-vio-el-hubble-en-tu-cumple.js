// INICIO Código lightbox imágenes //
const images = document.querySelectorAll('.gallery-img')
const containerImage = document.querySelector('.image-lightbox')
const imageContainer = document.querySelector('.img-show')
const imageTitle = document.querySelector('.img-title')
const closeModal = document.querySelector('.fa-regular.fa-circle-xmark')

//Obtención atributos src para asignar en el lightbox y alt para el título
images.forEach(image =>{
    image.addEventListener('click', ()=> {
        addImage(image.getAttribute('src'), image.getAttribute('alt'))
    })
})

//Asignación de src y título al lightbox
const addImage = (srcImage, altImage)=> {
    containerImage.classList.toggle('active')
    imageContainer.classList.toggle('show')
    imageContainer.src = srcImage
    imageTitle.innerHTML = altImage
}

//Agregar clases active y show para abrir/cerrar el lightbox al hacer click en el ícono
//y mostrar u ocultar la imagen dentro
closeModal.addEventListener('click', ()=>{
    containerImage.classList.toggle('active')
    imageContainer.classList.toggle('show')
})
// FIN Código lightbox imágenes //

// INICIO validación formulario //
var form = document.getElementById('form-news')
var nombre = document.getElementById('name')
var email = document.getElementById('email')
var error = document.getElementById('form-error-message')
var sent = document.getElementById('form-sent-message')
error.style.color = 'red'

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
// FIN validación formulario //