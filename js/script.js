const flechas = document.querySelectorAll(".img-flecha img");

flechas.forEach(flecha => {
    flecha.addEventListener("click", function () {
        // Encuentra la sección actual (donde está la flecha)
        let seccionActual = flecha.closest("section");

        // Encuentra la siguiente sección
        let siguienteSeccion = seccionActual.nextElementSibling;

        // Si existe una siguiente sección, desplázate suavemente
        if (siguienteSeccion) {
            siguienteSeccion.scrollIntoView({ behavior: "smooth" });
        }
    });
});