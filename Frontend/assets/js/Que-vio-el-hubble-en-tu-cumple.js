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