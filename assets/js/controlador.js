console.log('Usuarios', usuariosData);
console.log('Stickers', stickersData);
console.log('Conversaciones', conversacionesData);

if (!localStorage.getItem('usuarios')) {
  localStorage.setItem('usuarios',JSON.stringify(usuariosData));
}

if (!localStorage.getItem('stickers')) {
  localStorage.setItem('stickers', JSON.stringify(stickersData));
}

for (let chatKey in conversacionesData) {
  if (!localStorage.getItem(chatKey)) {
    localStorage.setItem(chatKey, JSON.stringify(conversacionesData[chatKey]));
  }
}

var usuarios = JSON.parse(localStorage.getItem('usuarios'));
var stickers = JSON.parse(localStorage.getItem('stickers'));
var usuarioSeleccionado = null;

function renderizarUsuarios() {
  for(i=0; i < usuarios.length; i++) {
    document.getElementById('usuarios').innerHTML += 
      `<div class="col-2" onclick="renderizarListaChats(${usuarios[i].id})">
        <img class="rounded-circle my-1" src="assets/profile-pics/${usuarios[i].imagen}">
      </div>`;
  }
}

renderizarUsuarios();

function renderizarListaChats(id) {
  usuarioSeleccionado = id;
  let usuario = usuarios.filter(item => item.id == id)[0];
  console.log('Usuario selecccionado', usuario);
  let conversaciones = usuario.conversaciones;
  document.getElementById('lista-chats').innerHTML = '';

  for (let i = 0; i < conversaciones.length; i++) {
    document.getElementById('lista-chats').innerHTML += 
      `<div class="chat p-1 m-2" onclick="mostrarDetalleChat('${conversaciones[i].id}')">
        <div class="img-chat p-3">
        <img src="assets/profile-pics/${conversaciones[i].imagenDestinatario}" class="rounded-circle">
        </div>
        <div class="textos-chat py-3"> <!-- Textos -->
        <div class="d-flex justify-content-between">
        <div><b>${conversaciones[i].nombreDestinatario}</b></div>
        <div>${conversaciones[i].horaUltimoMensaje}</div>
        </div>
        <div class="small">
          ${conversaciones[i].ultimoMensaje}
        </div>
        </div>
      </div>`;
  }
}

function renderizarDetalleChat() {

}

function enviarMensaje() {

}

function enviarSticker() {

}

function renderizarContactos() {

}

function mostrarUsuarios() {
  let listaUsuario = document.getElementById('lista-usuarios');
  if (
    listaUsuario.style.display === 'none'
    || !listaUsuario.style.display 
  ) {
    listaUsuario.style.display = 'flex';
  } else {
    listaUsuario.style.display = 'none';
  }
}

function seleccionarOpcion(id, opcionMenu) {
  console.log('Mostrar', id);
  document.getElementById('detalle-chat').style.display = 'none';
  document.getElementById('lista-chats').style.display = 'none';
  document.getElementById('lista-contactos').style.display = 'none';
  document.getElementById(id).style.display = 'block';

  document.querySelectorAll('.menu-option').forEach(etiqueta => {
    etiqueta.classList.remove('activo');
  });
  opcionMenu.classList.add('activo');
}

//Mostrar u ocular los stickers
function toggleStickers() {
  if (
    document.getElementById('stickers').style.display == 'none' 
    || !document.getElementById('stickers').style.display
  ) {
    document.getElementById('stickers').style.display = 'block';
  } else {
    document.getElementById('stickers').style.display = 'none';
  }
}

function mostrarDetalleChat(chatId) {
  document.getElementById('lista-chats').style.display = 'none';
  document.getElementById('lista-contactos').style.display = 'none';
  document.getElementById('detalle-chat').style.display = 'flex';

  let mensajes = JSON.parse(localStorage.getItem(chatId));
  console.log('Mensajes', mensajes);

  for (let i=0; i<mensajes.length;i++) {

    let mensaje =  '';

    if (mensajes[i].tipo == 'text') {
      mensaje = mensajes[i].mensaje;
    }
    if (mensajes[i].tipo == 'sticker') {
      let resultado = stickers.filter(item => item.id == mensajes[i].sticker)[0];
      mensaje = `<img src="assets/stickers/${resultado.sticker}" style="width: 150px">`;
    }

    document.getElementById('mensajes').innerHTML +=
      `<div class="mensaje ${usuarioSeleccionado == mensajes[i].emisor ? 'enviado' : 'recibido'}">
        ${mensaje}
        <div class="small text-end">${mensajes[i].hora}</div>
      </div>`;
  }
}