// FUNCION PARA TARGETEAR LA NOTA QUE HA SIDO SELECCIONADA
const targetNote = (elementoSeleccionado) => {

    // Le asignamos la clase active
    elementoSeleccionado.classList.add('active');
} 

// FUNCIÓN PARA REMOVER EL TARGET DE UNA NOTA CUANDO OTRA ES SELECCIONADA
const removeTargetNote = (event = event) => {

    let elemento = null;

    // Si nosotros enviamos el elemento 
    if (event.target === undefined) {
        elemento = event;
    }

    // Si un elemento del DOM hizo la llamada
    if (event.target !== undefined) {
        // Si el elemento del DOM no es un elemento nota
        if (!event.target.classList.contains('notes__note')) {
            return;
        }

        elemento = event.target;
    }

    // Obtenemos la nota con la clase active
    const notaActiva = document.getElementsByClassName('active')[0];
    if (notaActiva !== undefined) notaActiva.classList.remove('active');

    // Hacemos target a la nota actual
    targetNote(elemento);
}

export default removeTargetNote;