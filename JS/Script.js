document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('NombreCompleto').value;
    if(nombre.length == 0) {
      alert('porfavor coloque su nombre');
      return;
    }
    var contraseña = document.getElementById('Contraseña').value;
    if (contraseña.length < 6) {
      alert('La contraseña no es válida, porfavor intente de nuevo');
      return;
    }
    this.submit();
  }
