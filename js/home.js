(async () => {
  const peliculas1C = [
    {
      id: 1,
      nombre: "Minions",
      codigo: "ABC123",
      image: "../img/minions.png",
    },
    {
      id: 2,
      nombre: "Friends",
      codigo: "DEF456",
      image: "../img/friends.png",
    },
    {
      id: 3,
      nombre: "Barbie",
      codigo: "GHI789",
      image: "../img/barbie.png",
    },
    {
      id: 4,
      nombre: "The Big Bang Theory",
      codigo: "JKL012",
      image: "../img/thebigbangtheory.png",
    },
    {
      id: 5,
      nombre: "Charlie's Angels",
      codigo: "MNO345",
      image: "../img/losangelesdecharlie.png",
    },
  ];
  const peliculas2C = [
    {
      id: 6,
      nombre: "La Mujer Rey",
      codigo: "PQR678",
      image: "../img/lamujerrey.png",
    },
    {
      id: 7,
      nombre: "Guasón",
      codigo: "STU901",
      image: "../img/guason.png",
    },
    {
      id: 8,
      nombre: "Nace una estrella",
      codigo: "VWX234",
      image: "../img/naceunaestrella.png",
    },
    {
      id: 9,
      nombre: "Parásitos",
      codigo: "YZA567",
      image: "../img/parasitos.png",
    },
    {
      id: 10,
      nombre: "Matrix",
      codigo: "BCD890",
      image: "../img/matrix.png",
    },
  ];

  const peliculas3C = [
    {
      id: 11,
      nombre: "Harry Potter y la piedra filosofal",
      codigo: "BCD890",
      image: "../img/harrypotter1.png",
    },
    {
      id: 12,
      nombre: "Harry Potter y la cámara secreta",
      codigo: "BCD890",
      image: "../img/harrypotter2.png",
    },
    {
      id: 13,
      nombre: "Harry Potter y la cámara secreta",
      codigo: "BCD890",
      image: "../img/harrypotter3.png",
    },
    {
      id: 13,
      nombre: "Harry Potter y la cámara secreta",
      codigo: "BCD890",
      image: "../img/harrypotter4.png",
    },
    {
      id: 13,
      nombre: "Harry Potter y la cámara secreta",
      codigo: "BCD890",
      image: "../img/harrypotter5.png",
    },
  ];

  const peliculas4C = [
    {
      id: 11,
      nombre: "Harry Potter y la piedra filosofal",
      codigo: "BCD890",
      image: "../img/elijocreer.png",
    },
    {
      id: 12,
      nombre: "Harry Potter y la cámara secreta",
      codigo: "BCD890",
      image: "../img/floricienta.png",
    },
    {
      id: 13,
      nombre: "Harry Potter y la cámara secreta",
      codigo: "BCD890",
      image: "../img/relatosalvajes.png",
    },
    {
      id: 13,
      nombre: "Harry Potter y la cámara secreta",
      codigo: "BCD890",
      image: "../img/lahijadedios.png",
    },
    {
      id: 13,
      nombre: "Harry Potter y la cámara secreta",
      codigo: "BCD890",
      image: "../img/ungalloparaesculapio.png",
    },
  ];

  soloParaTi.innerHTML = peliculas1C
    .map(
      (pelicula) => `
  <div class='col-12 col-md-6 col-lg-2 py-3 columnas-solo-para-ti'>
    <div class="card">
    <a href=""><img src="${pelicula.image}" class="card img-para-ti" alt="..."></a>  
    </div>
  </div>
`
    )
    .join("");

  recienAniadidos.innerHTML = peliculas2C
    .map(
      (pelicula) => `
  <div class='col-12 col-md-6 col-lg-2 py-3 columnas-solo-para-ti'>
    <div class="card">
    <a href=""><img src="${pelicula.image}" class="card img-para-ti" alt="..."></a>  
    </div>
  </div>
`
    )
    .join("");

  mundoMagico.innerHTML = peliculas3C
    .map(
      (pelicula) => `
  <div class='col-12 col-md-6 col-lg-2 py-3 columnas-solo-para-ti'>
    <div class="card">
    <a href=""><img src="${pelicula.image}" class="card img-para-ti" alt="..."></a>  
    </div>
  </div>
`
    )
    .join("");

  populares.innerHTML = peliculas4C
    .map(
      (pelicula) => `
  <div class='col-12 col-md-6 col-lg-2 py-3 columnas-solo-para-ti'>
    <div class="card">
    <a href=""><img src="${pelicula.image}" class="card img-para-ti" alt="..."></a>  
    </div>
  </div>
`
    )
    .join("");
})();
