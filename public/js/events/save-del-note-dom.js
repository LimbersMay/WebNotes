import { saveNoteDb, removeNoteDb } from './api.js';

import makeVisible from './make-visible.js';
import addDomNote from './create-note-dom.js';
import orderNotesByDate from './order-by-date.js';

import formatDate from '../helpers.js';
import { getNoteInformation } from './get-note-inf.js';

const showNoteInfInCard = ( activeNote ) => {

    // Obtenemos todos los textareas
    const { inputTitle, inputContent, modifiedAtElement } = getNoteInformation();

    // Guardamos la fecha de modificación
    const date = new Date();

    // Formateamos la fecha con el siguiente formato: July 21, 2022 5:25 PM
    const formattedDate = formatDate(date);
    modifiedAtElement.innerHTML = `Modified at: ${formattedDate}`;
    
    // Si no hay ninguna nota activa significa que el usuario acaba de iniciar sesión 
    // En ese caso agregamos una nueva nota al DOM y mostramos el input
    if (activeNote === undefined) {
        addDomNote();
        activeNote = document.getElementsByClassName('active')[0];
    }

    // Le enviamos a la nota activa el atributo de fecha de modificación
    activeNote.setAttribute('modified_at', date);
        
    // Establecemos la información a sus hijos (titulo, contenido y fecha)
    activeNote.children.item(0).innerHTML = inputTitle.value;
    activeNote.children.item(1).innerHTML = inputContent.value;

    let dateFormatted = null;

    // Le ponemos la fecha solo si esta está vacía
    if (activeNote.children.item(2).innerHTML === '') {
        // Obenemos la fecha actual formateada
        // Fecha para el cliente
        dateFormatted = new Date().toLocaleDateString();
        activeNote.children.item(2).innerHTML = dateFormatted;
    }

    // Al guardar una nota, se ocultan los textareas y se muestra el listado de nuevo al guardar si se ve desde un teléfono 
    if (screen.width < 500) {
        makeVisible('list');
    }

    return activeNote;
}

// Función para guardar la nota
const saveNote = async () => {

    const { inputTitle, inputContent } = getNoteInformation();
    let activeNote = document.getElementsByClassName('active')[0];

    activeNote = showNoteInfInCard( activeNote );

    // Obtenemos el ID del elemento activo
    const idElement = activeNote.id;

    // Ordenamos los elementos por fecha

    if (idElement !== '') orderNotesByDate();

    // Consumimos la API para guardar la nota
    try {
        // Resolvemos la promesa
        const id = await saveNoteDb(idElement, inputTitle.value, inputContent.value);

        // Le agregamos a la nota activa su ID
        activeNote.setAttribute('id', id);
        
    } catch (errors) {
        // location.reload();
        console.error(errors);
    }
}

// Función para eliminar una nota
const removeNote = async () => {

    // Obtenemos la nota que está activa
    const activeNote = document.getElementsByClassName('active')[0];

    // Si el usuario no ha seleccionado ningún elemento, no se eliminará nada
    if (!activeNote) {
        return;
    }

    const activeNoteId = activeNote.id;

    // La eliminamos
    activeNote.remove();

    // Limpiamos los textarea
    const { inputTitle, inputContent } = getNoteInformation();

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
    try {
        await removeNoteDb(activeNoteId);
    } catch (error) {
        console.warn(error);
    }
}

export {
    saveNote,
    removeNote
}