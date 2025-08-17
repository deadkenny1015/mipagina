document.addEventListener('DOMContentLoaded', function () {
  fetch('/js/json/galeria.json')
    .then(response => response.json())
    .then(data => {
      const contenedor = document.getElementById('contenedor-galeria');
      data.forEach(imagen => {
        const div = document.createElement('div');
        div.classList.add('imagen');

        const img = document.createElement('img');
        img.src = imagen.url;
        img.alt = imagen.titulo;
        img.width = 200;   // valor sin 'px'
        img.height = 150;  // ajusta según tamaño real

        const p = document.createElement('p');
        p.textContent = imagen.titulo;

        div.appendChild(img);
        div.appendChild(p);
        contenedor.appendChild(div);
      });
    })
    .catch(error => console.error('Error cargando la galería:', error));
});
