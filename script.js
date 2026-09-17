const boton = document.getElementById("saludarBtn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.textContent = "¡Hola! 👋 Esta es una aplicación web de práctica.";
});
