window.onload = obtenerDatos();

function obtenerDatos(){
  const api_key = 'P1I92Tb7lEawm2dVQCekFO4xR5H3sQrCz7jdBvNI';
  const api_url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

  fetch(api_url)
  .then(response=>response.json())
  .then(result=>mostrarDatos(result))
}

function mostrarDatos({title, explanation, date, url}){
  const titulo = document.querySelector('#titulo');
  titulo.innerHTML = title;
  const fecha = document.querySelector('#fecha');
  fecha.innerHTML = date;
  const descripcion = document.querySelector('#descripcion');
  descripcion.innerHTML = explanation;
  const imagen = document.querySelector('#imagen');
  imagen.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`;
}