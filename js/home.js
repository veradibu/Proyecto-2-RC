(async () => {
  const peliculas = [
    {
      id: 1,
      nombre: "Minions",
      precio: 10.99,
      codigo: "ABC123",
      image: "../img/minions.png",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 19.99,
      codigo: "DEF456",
      image: "../img/friends.png",
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 5.49,
      codigo: "GHI789",
      image: "../img/barbie.png",
    },
    {
      id: 4,
      nombre: "Producto 4",
      precio: 15.75,
      codigo: "JKL012",
      image: "../img/thebigbangtheory.png",
    },
    {
      id: 5,
      nombre: "Producto 5",
      precio: 8.25,
      codigo: "MNO345",
      image: "../img/losangelesdecharlie.png",
    },
    {
      id: 6,
      nombre: "Producto 6",
      precio: 12.5,
      codigo: "PQR678",
      image: "../img/lamujerrey.png",
    },
    { id: 7, nombre: "Producto 7", precio: 7.99, codigo: "STU901" },
    { id: 8, nombre: "Producto 8", precio: 23.45, codigo: "VWX234" },
    { id: 9, nombre: "Producto 9", precio: 14.2, codigo: "YZA567" },
    { id: 10, nombre: "Producto 10", precio: 11.3, codigo: "BCD890" },
  ];

  soloParaTi.innerHTML = peliculas
    .map(
      (pelicula) => `
  <div class='col-12 col-md-6 col-lg-2 my-3 columnas-solo-para-ti'>
    <div class="card ">
    <a href=""><img src="${pelicula.image}" class="card img-para-ti" alt="..."></a>  
    </div>
  </div>
`
    )
    .join("");
})();
