(async () => {
  const peliculas = [
    {
      id: 1,
      nombre: "Minions",
      descripcion:
        "Los minions están en busca de un nuevo amo malvado. Por suerte se topan con Scarlet Overkill, quien trama un plan para dominar al mundo.",
      tipo: "pelicula",
      categoria: "Solo para ti",
      image: "../img/minions.png",
    },
    {
      id: 2,
      nombre: "Friends",
      descripcion:
        "La exitosa comedia Friends sigue la vida de un grupo de amigos que, explorando sus relaciones y aventuras cómicas, navegan por la vida adulta.",
      tipo: "serie",
      categoria: "Solo para ti",
      image: "../img/friends.png",
    },
    {
      id: 3,
      nombre: "Barbie",
      descripcion:
        "Vivir en Barbie Land es ser un ser perfecto en un lugar perfecto. A menos que tengas una crisis existencial total. O seas un Ken.",
      tipo: "pelicula",
      categoria: "Solo para ti",
      image: "../img/barbie.png",
    },
    {
      id: 4,
      nombre: "The Big Bang Theory",
      descripcion:
        "Dos amigos expertos en física tienen dificultades para navegar en el mundo real. Esta exitosa serie combina ciencia y comedia de una manera única.",
      tipo: "serie",
      categoria: "Solo para ti",
      image: "../img/thebigbangtheory.png",
    },
    {
      id: 5,
      nombre: "Charlie's Angels",
      descripcion:
        "Cameron Diaz, Drew Barrymore y Lucy Liu son bellas y talentosas agentes en una misión para evitar que una nueva tecnología caiga en malas manos.",
      tipo: "pelicula",
      categoria: "Solo para ti",
      image: "../img/losangelesdecharlie.png",
    },
    {
      id: 6,
      nombre: "La Mujer Rey",
      descripcion:
        "Viola Davis estelariza la extraordinaria historia real de la unidad de feroces guerreras que protegieron el Reino Africano de Dahomey en el siglo XIX.",
      tipo: "pelicula",
      categoria: "Solo para ti",
      image: "../img/lamujerrey.png",
    },
    {
      id: 7,
      nombre: "Guasón",
      descripcion:
        "Joaquin Phoenix interpreta al icónico Guasón en esta historia original del emblemático villano de DC Comics que le valió un Oscar® como Mejor Actor.",
      tipo: "pelicula",
      categoria: "Recien añadidos",
      image: "../img/guason.png",
    },
    {
      id: 8,
      nombre: "Nace una estrella",
      descripcion:
        "El músico Jackson Maine se enamora de Ally, una artista que había renunciado a su sueño de cantante. Él la anima a perseguir su pasión.",
      tipo: "pelicula",
      categoria: "Recien añadidos",
      image: "../img/naceunaestrella.png",
    },
    {
      id: 9,
      nombre: "Parásitos",
      descripcion:
        "Dos familias coreanas con vidas muy diferentes ven sus destinos entrelazados por la codicia y las desigualdades sociales. Ganadora de cuatro Oscar®.",
      tipo: "pelicula",
      categoria: "Recien añadidos",
      image: "../img/parasitos.png",
    },
    {
      id: 10,
      nombre: "Matrix",
      descripcion:
        "Keanu Reeves interpreta a un hacker que llega a creer que su mundo es un elaborado engaño concebido por poderosas máquinas de inteligencia artificial.",
      tipo: "pelicula",
      categoria: "Recien añadidos",
      image: "../img/matrix.png",
    },
    {
      id: 11,
      nombre: "Sex and the city 2",
      descripcion:
        "Mientras luchan contra las presiones de la vida y el amor, el cuarteto de amigas más famoso de Manhattan se une para un viaje a Abu Dhabi.",
      tipo: "pelicula",
      categoria: "Recien añadidos",
      image: "../img/sexandthecity2.png",
    },
    {
      id: 12,
      nombre: "Alf",
      descripcion:
        "Una familia común se ve atrapada en un evento extraordinario cuando un Amorfismo Lejano Fantástico aterriza en su cochera y se une a ellos.",
      tipo: "serie",
      categoria: "Recien añadidos",
      image: "../img/alf.png",
    },
    {
      id: 13,
      nombre: "Harry Potter y la piedra filosofal",
      descripcion:
        "Al cumplir 11 años, Harry Potter descubre que es un mago y que le esperan como alumno en la Escuela Hogwarts de Magia y Hechicería.",
      tipo: "pelicula",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter1.png",
    },
    {
      id: 14,
      nombre: "Harry Potter y la cámara secreta",
      descripcion:
        "¡La Cámara de los Secretos ha sido abierta! Harry Potter, Ron y Hermione, se enfrentan a una oscura fuerza que aterroriza los pasillos Hogwarts.",
      tipo: "pelicula",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter2.png",
    },
    {
      id: 15,
      nombre: "Harry Potter y el prisionero de azkaban",
      descripcion:
        "La vida de Harry Potter está en peligro una vez más cuando el peligroso mago Sirius Black escapa de la prisión de Azkaban rumbo a Hogwarts.",
      tipo: "pelicula",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter3.png",
    },
    {
      id: 16,
      nombre: "Harry Potter y el cáliz de fuego",
      descripcion:
        "Durante su cuarto año en Hogwarts, Harry es elegido por el Cáliz de Fuego para participar en el Torneo de los Tres Magos.",
      tipo: "pelicula",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter4.png",
    },
    {
      id: 17,
      nombre: "Harry Potter y la orden del fénix",
      descripcion:
        "Al ver que nadie cree en el regreso de Lord Voldemort, Harry decide entrenar en secreto a un grupo de estudiantes para la inminente batalla.",
      tipo: "pelicula",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter5.png",
    },
    {
      id: 18,
      nombre: "Harry Potter y la el misterio del principe",
      descripcion:
        "Dumbledore y Harry emprenden una serie de peligrosos viajes en un intento por descubrir el secreto para destruir a Lord Voldemort.",
      tipo: "pelicula",
      categoria: "Bienvenido al Mundo Magico",
      image: "../img/harrypotter6.png",
    },
    {
      id: 19,
      nombre: "Elijo creer",
      descripcion:
        "Con un emotivo relato de Ricardo Darín, este documental narra el camino a la victoria de la selección argentina en la Copa Mundial de Fútbol de 2022.",
      tipo: "pelicula",
      categoria: "Populares en CineGO",
      image: "../img/elijocreer.png",
    },
    {
      id: 20,
      nombre: "Floricienta",
      descripcion:
        "Florencia es una cantante, la cual se enamora de Federico, un empresario. Podrán superar todos los obstáculos, pero su amor tomará un giro inesperado.",
      tipo: "serie",
      categoria: "Populares en CineGO",
      image: "../img/floricienta.png",
    },
    {
      id: 21,
      nombre: "Relatos salvajes",
      descripcion:
        "La desigualdad y la injusticia causan estrés a muchas personas, y algunas cruzan la delgada línea que divide la civilización de la barbarie.",
      tipo: "pelicula",
      categoria: "Populares en CineGO",
      image: "../img/relatosalvajes.png",
    },
    {
      id: 22,
      nombre: "La hija de Dios",
      descripcion:
        "Dalma Maradona viaja a los lugares que compartió con su padre e intenta comprender cómo llegó a ser llamada la hija de Dios.",
      tipo: "serie",
      categoria: "Populares en CineGO",
      image: "../img/lahijadedios.png",
    },
    {
      id: 23,
      nombre: "Un gallo para esculapio",
      descripcion:
        "Nelson viaja a Buenos Aires para llevar un gallo de riña a su hermano. Al no encontrarlo llevará a vincularse con una banda de piratas del asfalto.",
      tipo: "serie",
      categoria: "Populares en CineGO",
      image: "../img/ungalloparaesculapio.png",
    },
    {
      id: 24,
      nombre: "Signos",
      descripcion:
        "Antonio, médico de profesión aficionado a la astrología, decide cobrar venganza por un hecho familiar que lo marcó a fuego en su infancia.",
      tipo: "serie",
      categoria: "Populares en CineGO",
      image: "../img/signos.png",
    },
    {
      id: 25,
      nombre: "Spaceman",
      descripcion:
        "Seis meses después de iniciar una solitaria misión, un astronauta enfrenta los problemas de su matrimonio con la ayuda de la misteriosa criatura que encontró su nave.",
      tipo: "pelicula",
      categoria: "Destacada",
      image: "#",
      video: "../img/spaceman.mp4",
    },
  ];

  const peliculasLocalStorage =
    JSON.parse(localStorage.getItem("peliculas")) || [];

  if (!peliculasLocalStorage.length) {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }

  const admin = {
    user: "usuario2024",
    pass: "123456789",
    role: "superAdmin",
  };

  localStorage.setItem("admin", JSON.stringify(admin));
})();
