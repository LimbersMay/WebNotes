// FUNCION PARA TARGETEAR LA NOTA QUE HA SIDO SELECCIONADA
const targetNote = (elementoSeleccionado) => {

    // Le asignamos la clase active
    elementoSeleccionado.classList.add('active');
} 

// FUNCIÓN PARA REMOVER EL TARGET DE UNA NOTA CUANDO OTRA ES SELECCIONADA
const removeTargetNote = (event = event) => {

    // Obtenemos todas las notas y les quitamos la clase active
    const notas = document.getElementsByClassName('notes__note');

    for (let i = 0; i < notas.length; i++) {
        notas.item(i).classList.remove('active');
    }

    let elemento = null;

    if (event.target !== undefined) {
        elemento = event.target;
    } else {
        elemento = event;
    }

    // Hacemos target a la nota actual
    targetNote(elemento);
}

export default removeTargetNote;