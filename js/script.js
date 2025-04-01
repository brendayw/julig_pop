document.querySelectorAll('.menu-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));
        
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const flechas = document.querySelectorAll('.img-flecha img');
flechas.forEach(flecha => {
    flecha.addEventListener('click', function() {
        let seccionActual = flecha.closest('.siguiente-seccion');
        let siguienteSeccion = seccionActual.nextElementSibling;

        while (siguienteSeccion && !siguienteSeccion.classList.contains('siguiente-seccion')) {
            siguienteSeccion = siguienteSeccion.nextElementSibling;
        }

        if (siguienteSeccion) {
            siguienteSeccion.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
