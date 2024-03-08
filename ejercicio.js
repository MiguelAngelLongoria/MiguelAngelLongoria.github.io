function cambiarColor()
{
    let variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "blue";
}

function cambiarTamano() {
    let imagenes = document.getElementsByClassName("imagen");

    // Verifica que haya al menos dos imágenes antes de intentar cambiar el tamaño
    if (imagenes.length >= 2) {
        // Cambia el tamaño solo de la segunda imagen (índice 1)
        imagenes[1].style.width = "30px";
    }
}