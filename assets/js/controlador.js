
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

function mostrarDetalleChat() {
  document.getElementById('lista-chats').style.display = 'none';
  document.getElementById('lista-contactos').style.display = 'none';
  document.getElementById('detalle-chat').style.display = 'flex';
}