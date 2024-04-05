window.addEventListener('wheel', function(e) {
    // Detecta si el desplazamiento es hacia arriba o hacia abajo
    const delta = e.deltaY;
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const headerHeight = header.offsetHeight;
    const footerHeight = footer.offsetHeight;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - footerHeight) { console.log(headerHeight) 
        console.log(footerHeight)
        if (delta < 0) {
            // Desplázate hacia la sección anterior
            window.scrollBy({ top: -(headerHeight + footerHeight), left: 0, behavior: 'smooth' });
        }
    } else {
        // Si el desplazamiento es hacia abajo
        if (delta > 0) {
            // Desplázate hacia la siguiente sección
            window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
        } 
        // Si el desplazamiento es hacia arriba
        else if (delta < 0) {
            // Desplázate hacia la sección anterior
            window.scrollBy({ top: -window.innerHeight, left: 0, behavior: 'smooth' });
        }
    }
});
