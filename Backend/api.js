// API

window.onload = obtenerDatos();

function obtenerDatos(){
  const api_key = 'P1I92Tb7lEawm2dVQCekFO4xR5H3sQrCz7jdBvNI';
  const api_url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

  fetch(api_url)
  .then(response=>response.json())
  .then(result=>mostrarDatos(result))
}

function mostrarDatos({title, explanation, date, url, media_type}){
  const titulo = document.querySelector('#titulo');
  titulo.innerHTML = title;
  const fecha = document.querySelector('#fecha');
  fecha.innerHTML = date;
  const descripcion = document.querySelector('#descripcion');
  descripcion.innerHTML = explanation;
  const imagen = document.querySelector('#imagen');
  if (media_type == 'video')
  {
    imagen.innerHTML = `<iframe src="${url}" alt="${url}" style="width: 100%; height: 350px; border-radius: 15px;">`;
    console.log(2);
  }
  else {
    imagen.innerHTML = `<img src="${url}" alt="${url}" style="width: 100%; border-radius: 15px;">`;
    console.log(3);
  }
}
