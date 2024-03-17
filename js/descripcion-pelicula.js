const database = [
    {
        id: 1,
        title: 'Minions',
        description: 'Los minions están en busca de un nuevo amo malvado. Por suerte se topan con Scarlet Overkill, quien trama un plan para dominar al mundo.',
        date:'2023',
        duration:69,
        poster:'https://areajugones.sport.es/wp-content/uploads/2022/07/minions-1080x609.jpeg',
        categorie:'Animados',
    },
    {
        id: 2,
        title: 'Friends',
        description: 'La exitosa comedia Friends sigue la vida de un grupo de amigos que, explorando sus relaciones y aventuras cómicas, navegan por la vida adulta.',
        date:'2023',
        duration:80,
        poster:'https://www.clarin.com/img/2019/05/01/oV_xxlpDO_1256x620__1.jpg',
        categorie:'comedia',
    },
    {
        id: 3,
        title: "Barbie",
        description: "Vivir en Barbie Land es ser un ser perfecto en un lugar perfecto. A menos que tengas una crisis existencial total. O seas un Ken.",
        date:'2023',
        duration:69,
        poster:'https://elcomercio.pe/resizer/dlBsNFo9x-6B4s7iqdoEL2e-j6E=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/PCFRVLR4PJAJTO46KOI3FPJN5A.jpg',
        categorie:"comedia",
    },
    {
        id: 4,
        title: "The Big Bang Theory",
        description: "Dos amigos expertos en física tienen dificultades para navegar en el mundo real. Esta exitosa serie combina ciencia y comedia de una manera única.",
        date:'2022',
        duration:50,
        poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/eb7d5f3f4485c0378fcc55e68ee797c20965a48a91219ddc36aa48b110b09960._RI_TTW_SX1080_FMjpg_.jpg',
        categorie:"comedia",
    },
    {
        id: 5,
        title: "Charlie's Angels",
        description: "Cameron Diaz, Drew Barrymore y Lucy Liu son bellas y talentosas agentes en una misión para evitar que una nueva tecnología caiga en malas manos.",
        date:'2019',
        duration:109,
        poster:'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQzxTS_M3p_2N1hNjH7P0qbCjsio4-6bUmTR-_KBot3xJgOVaRtXviIQwdPGbcQI91BQdoJ0OVoR6NXbg-ctVwV2nvT7R8TDUhPm.jpg?r=6b5',
        categorie:"comedia",
    },
    {
        id: 6,
        title: "La Mujer Rey",
        description: "Viola Davis estelariza la extraordinaria historia real de la unidad de feroces guerreras que protegieron el Reino Africano de Dahomey en el siglo XIX.",
        date:'2019',
        duration:90,
        poster:'https://areajugones.sport.es/wp-content/uploads/2022/11/la-mujer-rey.jpg',
        categorie:"comedia",
    },
    {
        id: 7,
        title: "Guasón",
        description:
          "Joaquin Phoenix interpreta al icónico Guasón en esta historia original del emblemático villano de DC Comics que le valió un Oscar® como Mejor Actor.",
        date:'2017',
        duration:90,
        poster:'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/e37195fe-c232-4ba0-bb9e-c4004279b6fa/a445556d84a1c711dbb0e16ebb44bf22a46f9746.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom',
        categorie:"accion",
      },
      {
        id: 8,
        name: "Nace una estrella",
        description:
          "El músico Jackson Maine se enamora de Ally, una artista que había renunciado a su sueño de cantante. Él la anima a perseguir su pasión.",
          date:'2017',
          duration:90,
          poster:'https://www.lavoz.com.ar/resizer/LXEuudUwDA3zxvkHUjsaDXadCf0=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/4EKYS2U2D5BRXM2TWOROUTE4DI.jpg',
          categorie:"accion",
      },
      {
        id: 9,
        name: "Parásitos",
        description:
          "Dos familias coreanas con vidas muy diferentes ven sus destinos entrelazados por la codicia y las desigualdades sociales. Ganadora de cuatro Oscar®.",
          date:'2017',
        duration:90,
        poster:'https://hips.hearstapps.com/hmg-prod/images/parasite-explicacion-analisis-final-3-1572041598.jpg',
        categorie:"accion",
        
      },
      {
        id: 10,
        name: "Matrix",
        description:
          "Keanu Reeves interpreta a un hacker que llega a creer que su mundo es un elaborado engaño concebido por poderosas máquinas de inteligencia artificial.",
          date:'2017',
        duration:90,
        poster:'https://cdn.forbes.com.mx/2021/06/Matrix-HBO-Max.jpg',
        categorie:"accion",
        
      },
      {
        id: 11,
        name: "Sex and the city 2",
        description:
          "Mientras luchan contra las presiones de la vida y el amor, el cuarteto de amigas más famoso de Manhattan se une para un viaje a Abu Dhabi.",
          date:'2017',
          duration:90,
          poster:'https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2010/4/19/1271692749733/Sex-and-the-City-2-001.jpg?width=620&quality=85&auto=format&fit=max&s=fd46e71158a6ba24d6f24f031e24c475',
          categorie:"accion",
      },
      {
        id: 12,
        name: "Alf",
        description:
          "Una familia común se ve atrapada en un evento extraordinario cuando un Amorfismo Lejano Fantástico aterriza en su cochera y se une a ellos.",
          date:'2017',
        duration:90,
        poster:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LJ3N2NU4VNH7FJX53BMWWQQ5NE.jpg',
        categorie:"accion",
        
      },
      {
        id: 13,
        name: "Harry Potter y la piedra filosofal",
        description:
          "Al cumplir 11 años, Harry Potter descubre que es un mago y que le esperan como alumno en la Escuela Hogwarts de Magia y Hechicería.",
          date:'2017',
          duration:90,
          poster:'https://hips.hearstapps.com/hmg-prod/images/harry-potter-piedra-filosofal-grindelwald-animales-fantasticos-1542034491.jpg?crop=0.986xw:1.00xh;0.00801xw,0&resize=1200:*',
          categorie:"accion",
      },


]

const updateDB = () => {

    const storageDatabase = localStorage.getItem('db')
    if(!storageDatabase) {
        localStorage.setItem('db', JSON.stringify(database))
        return null      
    }

    const actualDatabase = JSON.parse(storageDatabase)

    if(actualDatabase && actualDatabase.length > 0) return null

    localStorage.setItem('db', JSON.stringify(database))
}

updateDB()



localStorage.setItem('id', '1')

const id = parseInt(localStorage.getItem('id'))
if( !id || id < 1 ){
    // window.location.replace('/index.html')
   
}

const printMovie = (movie) => {
    console.log(movie);
    const title = document.getElementById('name')
    const poster = document.getElementById('poster')
    const description = document.getElementById('description')
    const yearCategories = document.getElementById('categorie')
    const duration = document.getElementById('duration')

    title.innerHTML = movie.title
    description.innerHTML = movie.description
    duration.innerHTML = `${movie.duration} minutos`
    yearCategories.innerHTML = `${movie.date} - ${movie.categorie}`
    poster.src = movie.poster
}


const getMovie = () => {
    const storage = localStorage.getItem('db')
    if(!storage){
        // window.location.replace('/index.html')
        
    return null
    }

    const database = JSON.parse(storage)
    const findedMovie = database.find( movie => movie.id === id )

    if(!findedMovie){
        // window.location.replace('/index.html')
      ;
    return null
    }
    printMovie(findedMovie)
}

getMovie()



















