
const enviarBoton = document.getElementById("enviar");


enviarBoton.addEventListener("click", function () {
  // Obtén los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;


  alert("Apreciado " + nombre + ", hemos recibido su mensaje. Nos comunicaremos al teléfono " + telefono + " o a la dirección de correo electrónico " + correo);
});