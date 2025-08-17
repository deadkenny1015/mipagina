document.addEventListener('DOMContentLoaded', function() {
    fetch('js/json/noticias.json')
      .then(response => response.json())
      .then(data => {
        const contenedor = document.getElementById('contenedor-noticias');
        data.forEach(noticia => {
          contenedor.innerHTML += `
            <div class="noticia">
              <h3>${noticia.titulo}</h3>
              <p>${noticia.contenido}</p>
              <small>${noticia.fecha}</small>
              <img src="${noticia.imagen}" alt="${noticia.titulo}" style="width: 200px; margin-top: 10px;">
            </div>
            <hr>
          `;
        });
      })
      .catch(error => console.error('Error cargando las noticias:', error));
  });
