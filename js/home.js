const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.classList.add("bg-dark");
  } else {
    nav.classList.remove("bg-dark");
  }
});
(async () => {
  const peliculas = [
    {
      id: 1,
      nombre: "Minions",
      categoria: "Solo para ti",
      image: "../img/minions.png",
    },
    {
      id: 2,
      nombre: "Friends",
      categoria: "Solo para ti",
      image: "../img/friends.png",
    },
    {
      id: 3,
      nombre: "Barbie",
      categoria: "Solo para ti",
      image: "../img/barbie.png",
    },
    {
      id: 4,
      nombre: "The Big Bang Theory",
      categoria: "Solo para ti",
      image: "../img/thebigbangtheory.png",
    },
    {
      id: 5,
      nombre: "Charlie's Angels",
      categoria: "Solo para ti",
      image: "../img/losangelesdecharlie.png",
    },
    {
      id: 6,
      nombre: "La Mujer Rey",
      categoria: "Solo para ti",
      image: "../img/lamujerrey.png",
    },
    {
      id: 7,
      nombre: "Guasón",
      categoria: "Recien añadidos",
      image: "../img/guason.png",
    },
    {
      id: 8,
      nombre: "Nace una estrella",
      categoria: "Recien añadidos",
      image: "../img/naceunaestrella.png",
    },
    {
      id: 9,
      nombre: "Parásitos",
      categoria: "Recien añadidos",
      image: "../img/parasitos.png",
    },
    {
      id: 10,
      nombre: "Matrix",
      categoria: "Recien añadidos",
      image: "../img/matrix.png",
    },
    {
      id: 11,
      nombre: "Sex and the city 2",
      categoria: "Recien añadidos",
      image: "../img/sexandthecity2.png",
    },
    {
      id: 12,
      nombre: "Alf",
      categoria: "Recien añadidos",
      image: "../img/alf.png",
    },
    {
      id: 13,
      nombre: "Harry Potter y la piedra filosofal",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter1.png",
    },
    {
      id: 14,
      nombre: "Harry Potter y la cámara secreta",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter2.png",
    },
    {
      id: 15,
      nombre: "Harry Potter y el prisionero de azkaban",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter3.png",
    },
    {
      id: 16,
      nombre: "Harry Potter y el cáliz de fuego",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter4.png",
    },
    {
      id: 17,
      nombre: "Harry Potter y la orden del fénix",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter5.png",
    },
    {
      id: 18,
      nombre: "Harry Potter y la el misterio del principe",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter6.png",
    },
    {
      id: 19,
      nombre: "Elijo creer",
      categoria: "Populares en CineGO",
      image: "../img/elijocreer.png",
    },
    {
      id: 20,
      nombre: "Floricienta",
      categoria: "Populares en CineGO",
      image: "../img/floricienta.png",
    },
    {
      id: 21,
      nombre: "Relatos salvajes",
      categoria: "Populares en CineGO",
      image: "../img/relatosalvajes.png",
    },
    {
      id: 22,
      nombre: "La hija de Dios",
      categoria: "Populares en CineGO",
      image: "../img/lahijadedios.png",
    },
    {
      id: 23,
      nombre: "Un gallo para esculapio",
      categoria: "Populares en CineGO",
      image: "../img/ungalloparaesculapio.png",
    },
    {
      id: 24,
      nombre: "Signos",
      categoria: "Populares en CineGO",
      image: "../img/signos.png",
    },
  ];

  const peliculasLocalStorage =
    JSON.parse(localStorage.getItem("peliculas")) || [];

  if (!peliculasLocalStorage.length) {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }

  const pelisCategoriaSoloparati = peliculas.filter(
    (pelicula) => pelicula.categoria === "Solo para ti"
  );

  const pelisCategoriaRecienAnadidos = peliculas.filter(
    (pelicula) => pelicula.categoria === "Recien añadidos"
  );

  const pelisCategoriaMundoMagico = peliculas.filter(
    (pelicula) => pelicula.categoria === "Bienvenido al Mundo Magico"
  );

  const pelisCategoriaPopulares = peliculas.filter(
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
