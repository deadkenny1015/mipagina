document.addEventListener('DOMContentLoaded', function () {
  fetch('../js/json/galeria.json')
    .then(response => response.json())
    .then(data => {
      const contenedor = document.getElementById('contenedor-galeria');

      data.forEach(imagen => {
        const div = document.createElement('div');
        div.classList.add('imagen');

        // Crear la miniatura
        const img = document.createElement('img');
        img.src = imagen.src;          // miniatura
        img.alt = imagen.alt;          // descripción accesible
        img.width = imagen.width;      // tamaño original
        img.height = imagen.height;    // tamaño original

        // Enlace para Lightbox (imagen grande)
        const a = document.createElement('a');
        a.href = imagen.full; // la imagen grande
        a.setAttribute('data-lightbox', 'galeria');
        a.setAttribute('data-title', imagen.title);

        a.appendChild(img); // meter img dentro del <a>

        // Título debajo de la imagen
        const p = document.createElement('p');
        p.textContent = imagen.title;

        div.appendChild(a);
        div.appendChild(p);
        contenedor.appendChild(div);
      });
    })
    .catch(error => console.error('Error cargando la galería:', error));
});
