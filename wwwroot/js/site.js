// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function verificarPago() {
  let nombre = document.getElementById("nombre").value;
  let fecha = document.getElementById("fecha").value;
  let hobbies = document.getElementById("hobbies").value;
  let pago = document.getElementById("pago").value;

  let mensaje = document.getElementById("mensaje");

  if (nombre === "" || fecha === "" || hobbies === "") {
    mensaje.innerText = "Complete todos los campos";
    return;
  }

  if (pago === "no") {
    mensaje.innerText = "Ud aún no ha completado su pago";
    mensaje.style.color = "red";
  } else {
    mensaje.innerText = "Completado su registro";
    mensaje.style.color = "green";
  }
}
