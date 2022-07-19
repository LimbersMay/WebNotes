import { makeVisible } from "./helpers.js";
import sendData from "./consumir-api.js";
// MÉTODOS PARA LOS BOTONES DE GUARDAR Y ELIMINAR NOTA

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
    const { id } = await sendData(idElement, inputTitle.value, inputContent.value, dateFormatted);

    // Le agregamos a la nota activa su ID
    activeNote.setAttribute('id', id);
}

// Función para eliminar una nota
const deleteNote = () => {

    // Obtenemos la nota que está activa
    const activeNote = document.getElementsByClassName('active')[0];

    // La eliminamos
    activeNote.remove();

    // Ocultamos el input si estamos en una resolución menor a 500
    if (screen.width < 500) {
        makeVisible('list');
    }
}

// Obtenemos el botón de guardar
const btnSave = document.getElementsByClassName('note__save')[0];

// Obtenemos el botón de eliminar
const btnRemove = document.getElementsByClassName('note__delete')[0];

btnSave.addEventListener('click', saveNote);
btnRemove.addEventListener('click', deleteNote);
