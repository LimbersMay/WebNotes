import removeTargetNota from "./target-note.js";

// FUNCIÓN PARA CREAR UNA NUEVA NOTA DENTRO DEL DOM
const createNoteElement = () => {

    // Creamos el elemento del contenedor
    const notaDiv = document.createElement('div');
    notaDiv.className = 'notes__note';

    // Creamos el elemento titulo
    const tituloDiv = document.createElement('h3');
    tituloDiv.className = 'note__title';

    // Creamos el elemento contenido
    const contenidoDiv = document.createElement('p');
    contenidoDiv.className = 'note__content';

    // Creamos el elemento de fecha
    const fechaDiv = document.createElement('p');
    fechaDiv.className = 'note__date';

    // Le agregamos al contenedor el titulo, el contenido y la fecha
    notaDiv.appendChild(tituloDiv);
    notaDiv.appendChild(contenidoDiv);
    notaDiv.appendChild(fechaDiv);

    // Eliminamos la clase active de todas las notas
    removeTargetNota(notaDiv);

    return notaDiv;
}

// Función para agregar una nueva nota 
const addDomNote = (event) => {

    if (event !== undefined) event.preventDefault();

    const contenedorTareas = document.getElementsByClassName('profile__container')[0];

    // Verificamos que la pantalla este debajo de los 500pxs
    if (screen.width < 500) {
        contenedorTareas.style.display = 'none';

        // Hacemos visible la parte en donde pondrá el contenido de la nota
        const contenedorNota = document.getElementsByClassName('notes__content__container')[0];

        contenedorNota.style.display = 'block';

        // Le indicamos que ocupe el 100% de la pantalla
        contenedorNota.style.width = '100%';
    }

    // Le asignamos valores vacios a los textareas
    if (event !== undefined) {
        const inputTittle = document.getElementsByClassName('input__title')[0];
        const inputContent = document.getElementsByClassName('input__body')[0];
        inputTittle.value = '';
        inputContent.value = '';
    }

    // Creamos un nuevo elemento nota dentro del dom
    const nota = createNoteElement();

    // Agregamos la nueva nota al contenedor de notas
    const contenedorNotas = document.getElementsByClassName('content__notes')[0];

    contenedorNotas.prepend(nota);
}

export default addDomNote;