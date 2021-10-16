var usuariosData = [
  {
    id: 1,
    nombre: 'Goku',
    imagen: 'goku.jpg',
    contactos: [2, 3, 4, 5],
    conversaciones: [
      {
        id: 'chat-1-2', //El detalle de toda la conversacion se podrá obtener del item  chat-1-2
        ultimoMensaje: 'Vegeta: Kakaroto!!', // En este punto solo se mantendrá el  último mensaje.
        horaUltimoMensaje: '19:00',
        nombreDestinatario: 'Vegeta',
        imagenDestinatario: 'vegeta.jpg',
      },
      {
        id: 'chat-1-3', //El detalle de toda la conversacion se podrá obtener del item  chat-1-2
        ultimoMensaje: 'Krilin: Gooookkkuuu!!!!!', // En este punto solo se mantendrá el  último mensaje.
        horaUltimoMensaje: '12:50',
        nombreDestinatario: 'Krilin',
        imagenDestinatario: 'krilin.jpg',
      }
    ]
  },
  {
    id: 2,
    nombre: 'Vegeta',
    imagen: 'vegeta.jpg',
    contactos: [1, 3],
    conversaciones: [] 
  },
  {
    id: 3,
    nombre: 'Krilin',
    imagen: 'krilin.jpg',
    contactos: [1, 2],
    conversaciones: [] 
  },
  {
    id: 4,
    nombre: 'Cell',
    imagen: 'cell.jpg',
    contactos: [1, 2],
    conversaciones: [] 
  },
  {
    id: 5,
    nombre: 'Dende',
    imagen: 'dende.jpg',
    contactos: [1, 2],
    conversaciones: [] 
  },
  {
    id: 6,
    nombre: 'Bulma',
    imagen: 'bulma.jpg',
    contactos: [1, 2],
    conversaciones: [] 
  },
  {
    id: 7,
    nombre: 'Krilin',
    imagen: 'krilin.jpg',
    contactos: [1, 2],
    conversaciones: [] 
  },
  {
    id: 8,
    nombre: 'Freezer',
    imagen: 'freezer.jpg',
    contactos: [1, 2],
    conversaciones: [] 
  }
];


var stickersData = [
  {
    id: 1,
    sticker: '1.webp',
  },
  {
    id: 2,
    sticker: '2.webp',
  },
  {
    id: 3,
    sticker: '3.webp',
  },
  {
    id: 4,
    sticker: '4.webp',
  },
  {
    id: 5,
    sticker: '5.webp',
  },
  {
    id: 6,
    sticker: '6.webp',
  },
  {
    id: 7,
    sticker: '7.webp',
  }
];

var conversacionesData = {
  'chat-1-2': [
    {
      emisor: 1,
      receptor: 2,
      mensaje: 'Hola Vegeta',
      tipo: 'text',
      hora: '12:30'
    },
    {
      emisor: 2,
      receptor: 1,
      mensaje: 'Kakaroto!!',
      tipo: 'text',
      hora: '12:30'
    },
    {
      emisor: 2,
      receptor: 1,
      tipo: 'sticker',
      sticker: 1
    }
  ],
  'chat-1-3': [
    {
      emisor: 1,
      receptor: 3,
      mensaje: 'Hola Krillin',
      tipo: 'text',
      hora: '12:30'
    },
    {
      emisor: 3,
      receptor: 1,
      mensaje: 'Gooookkkuuu!!!!!',
      tipo: 'text',
      hora: '12:30'
    }
  ]  
}


