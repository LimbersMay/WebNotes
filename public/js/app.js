import showInput from "./events/show-note-inf.js";
import removeTargetNote from "./events/target-note.js";

import addDomNote from "./events/create-note-dom.js";
import { saveNote, removeNote, saveNoteRealTime } from "./events/save-del-note-dom.js";

// 1. Eventos a los contenedores de las notas
// Cuando se rendericen todas las notas, les agregaremos los eventos show Input y remove Target Nota

/*
    1. Show input: Mostrar el contenido de la nota en la parte del textarea editable
    2. Remove target nota: Eliminar el target a la nota para que esta ya no este seleccionada
*/

// Obtenemos todas las notas
const notes = document.getElementsByClassName('notes__note');

// Les agregamos los eventos a las notas
for (let i = 0; i < notes.length; i++) {
    notes.item(i).addEventListener('click', removeTargetNote);
    notes.item(i).addEventListener('click', showInput);
}

// 2. Evento al botón de addNote
/*
    1. AddNoteDOM: Agrega una nueva nota al DOM y limpia el contenido de los textareas
*/
const addNoteButton = document.getElementsByClassName('content__add__note')[0];
addNoteButton.addEventListener('click', addDomNote);

// 3. Evento al botón de save y delete
/*
    1. SaveNote: Actualiza el elemento existente del DOM con los datos de los textareas y consume la API para guardar la nota en la DB

    2. RemoveNote: Elimina el elemento existente del DOM y consume la API para eliminar la nota en la DB
*/

// Obtenemos los botones del DOM
const btnSave = document.getElementsByClassName('note__save')[0];
const btnRemove = document.getElementsByClassName('note__delete')[0];

// Les asignamos sus respectivos eventos
btnSave.addEventListener('click', saveNote);
btnRemove.addEventListener('click', removeNote);


// A los textareas les agregamos el evento para que actualicen en tiempo real el contenido de las notas
// Obtenemos los textareas
const inputTitle = document.getElementsByClassName('input__title')[0];
const inputContent = document.getElementsByClassName('input__body')[0];

inputTitle.addEventListener('keyup', saveNoteRealTime);
inputContent.addEventListener('keyup', saveNoteRealTime);