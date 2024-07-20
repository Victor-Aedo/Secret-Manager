// function obtenerDatos() {
//     // Obtener el formulario por su ID
//     var formulario = document.getElementById("form-login");

//     // Obtener los valores de los campos de entrada por su atributo 'name'
//     var correo = formulario.querySelector('input[name="username"]').value;
//     var contraseña = formulario.querySelector('input[name="password"]').value;

//     // Hacer algo con los valores obtenidos
//     console.log("Correo electrónico: " + correo);
//     console.log("Contraseña: " + contraseña);
// }

// document.addEventListener("DOMContentLoaded", function() {
//     var botonObtenerDatos = document.getElementById("sign-in");
//     botonObtenerDatos.onclick = obtenerDatos;
// });


const boton = document.querySelector('#sign-in');

boton.addEventListener('click', ()=>{
    alert('funciona')
})