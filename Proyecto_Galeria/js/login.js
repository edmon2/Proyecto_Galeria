const submitButton = document.getElementById("submit");
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores de entrada del usuario
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Validar los valores de entrada del usuario
  if (username === "" || password === "") {
    alert("Por favor, ingrese un usuario y una contraseña válidos.");
  } else {
    // Hacer algo con los valores de entrada del usuario
    // Por ejemplo, enviar una solicitud AJAX al servidor para verificar las credenciales del usuario
  }
});
