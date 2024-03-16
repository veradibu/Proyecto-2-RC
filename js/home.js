const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.classList.add("bg-dark");
  } else {
    nav.classList.remove("bg-dark");
  }
});
(async () => {
  const peliculasLocalStorage =
    JSON.parse(localStorage.getItem("peliculas")) || [];

  const pelisCategoriaSoloparati = peliculasLocalStorage.filter(
    (pelicula) => pelicula.categoria === "Solo para ti"
  );
  console.log(pelisCategoriaSoloparati);

  const pelisCategoriaRecienAnadidos = peliculasLocalStorage.filter(
    (pelicula) => pelicula.categoria === "Recien añadidos"
  );

  const pelisCategoriaMundoMagico = peliculasLocalStorage.filter(
    (pelicula) => pelicula.categoria === "Bienvenido al Mundo Magico"
  );

  const pelisCategoriaPopulares = peliculasLocalStorage.filter(
    (pelicula) => pelicula.categoria === "Populares en CineGO"
  );

  soloParaTi.innerHTML = pelisCategoriaSoloparati
    .map(
      (pelicula) => `
  <div class='col-4 col-md-4 col-lg-2 py-3'>
    <div class="card">
      <a href=""><img src="${pelicula.image}" class="card img-para-ti" alt="..."></a>  
    </div>
  </div>
`
    )
    .join("");

  recienAniadidos.innerHTML = pelisCategoriaRecienAnadidos
    .map(
      (pelicula) => `
  <div class='col-4 col-md-4 col-lg-2 py-3'>
    <div class="card">
      <a href=""><img src="${pelicula.image}" class="card img-para-ti" alt="..."></a>  
    </div>
  </div>
`
    )
    .join("");

  mundoMagico.innerHTML = pelisCategoriaMundoMagico
    .map(
      (pelicula) => `
  <div class='col-4 col-md-4 col-lg-2 py-3'>
    <div class="card">
      <a href=""><img src="${pelicula.image}" class="card img-para-ti" alt="..."></a>  
    </div>
  </div>
`
    )
    .join("");

  populares.innerHTML = pelisCategoriaPopulares
    .map(
      (pelicula) => `
  <div class='col-4 col-md-4 col-lg-2 py-3'>
    <div class="card">
      <a href=""><img src="${pelicula.image}" class="card img-para-ti" alt="..."></a>  
    </div>
  </div>
`
    )
    .join("");
})();
