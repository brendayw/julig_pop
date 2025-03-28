document.getElementById("flecha").addEventListener("click", function () {
    // Encuentra la sección actual (donde está la flecha)
    let seccionActual = document.querySelector(".principal");

    // Encuentra la siguiente sección
    let siguienteSeccion = seccionActual.nextElementSibling;

    // Si existe una siguiente sección, desplázate suavemente
    if (siguienteSeccion) {
        siguienteSeccion.scrollIntoView({ behavior: "smooth" });
    }
});