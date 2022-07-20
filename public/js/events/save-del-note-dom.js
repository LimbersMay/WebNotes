import { saveNoteDb, removeNoteDb } from './api.js';

// Función para guardar la nota
const saveNote = async() => {
    // Obtenemos el textarea del titulo y del contenido
    const inputTitle = document.getElementsByClassName('input__title')[0];

    const inputContent = document.getElementsByClassName('input__body')[0];

    // Obenemos la fecha actual formateada
    const date = new Date();
    const dateFormatted = date.toDateString();

    // Obtenemos la nota que está activa
    const activeNote = document.getElementsByClassName('active')[0];

    // Establecemos la información a sus hijos (titulo, contenido y fecha)
    activeNote.children.item(0).innerHTML = inputTitle.value;
    activeNote.children.item(1).innerHTML = inputContent.value;

    // Le ponemos la fecha solo si esta está vacía
    if (activeNote.children.item(2).innerHTML === ''){
        activeNote.children.item(2).innerHTML = dateFormatted;
    }    

    // Ocultamos el input si estamos en una resolución menor a 500
    if (screen.width < 500) {
        makeVisible('list');
    }

    // Obtenemos el ID del elemento activo
    const idElement = activeNote.id;

    // Consumimos la API para guardar la nota
    try {
        // Resolvemos la promesa
        const id = await saveNoteDb(idElement, inputTitle.value, inputContent.value, dateFormatted);

        // Le agregamos a la nota activa su ID
        activeNote.setAttribute('id', id);

    } catch(errors) {
        location.reload();
        console.error(errors);
    }
}

// Función para eliminar una nota
const removeNote = async() => {

    // Obtenemos la nota que está activa
    const activeNote = document.getElementsByClassName('active')[0];
    const activeNoteId = activeNote.id;

    // La eliminamos
    activeNote.remove();

    // Limpiamos los textarea
    const inputTitle = document.getElementsByClassName('input__title')[0];
    const inputContent = document.getElementsByClassName('input__body')[0];

    inputTitle.value = '';
    inputContent.value = '';

    // Ocultamos el input si estamos en una resolución menor a 500
    if (screen.width < 500) {
        makeVisible('list');
    }

    // Si la nota no tiene ID, significa que no fue guardada en la DB, por lo tanto no la eliminamos
    if (activeNoteId === '') {
        return;
    }

    // La eliminamos de la base de datos
    try{
        await removeNoteDb(activeNoteId);
    } catch(error) {
        console.warn(error);
    }
}

// Función para guardar la información de una nota en su respectivo textarea temporalmente hasta que la nota sea guardada o eliminada
const saveNoteInfTemp = async() => {
}

export {
    saveNote,
    removeNote
}