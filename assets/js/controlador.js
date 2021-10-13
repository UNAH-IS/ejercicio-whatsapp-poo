
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
  document.getElementById('lista-chats').style.display = 'none';
  document.getElementById('lista-contactos').style.display = 'none';
  document.getElementById(id).style.display = 'block';

  document.querySelectorAll('.menu-option').forEach(etiqueta => {
    etiqueta.classList.remove('activo');
  });
  opcionMenu.classList.add('activo');
}