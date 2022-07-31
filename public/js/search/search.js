import { renderizarElementos } from "./renderizar-elementos.js";

// Obtenemos el contenedor de las tareas
const notesContainer = document.getElementsByClassName('content__notes')[0];
const notesChildren = notesContainer.children;

const notes = {};

for (let element = 0; element < notesContainer.children.length; element++) {
    const name = notesChildren.item(element).children[0].innerText;
    const id = notesChildren.item(element).id;

    Object.assign(notes, { [id]: name });
}

// Función para buscar los 5 elementos que coincidan más con la búsqueda
const searchElements = () => {


    const inputSearchValue = document.getElementsByClassName('input__search')[0].value;

    // Obtenemos todos sus nombres con el formato: 
    /*
    {
        nombre: Id
    }
    */

    // Comparamos todas las claves en busca de coincidencias
    const regex = RegExp(inputSearchValue, 'i');
    const elementosCoincidentes = Object.keys(notes).filter(key => regex.test(notes[key]));

    console.log(elementosCoincidentes);
    console.log(notes);

    // Obtenemos los elementos del DOM que coincidan con la búsqueda
    const elementosDOM = elementosCoincidentes.map(id => document.getElementById(id));

    renderizarElementos(elementosDOM, notesContainer);
}


export const search = () => {

    // Obtenemos el cotenido del input
    const inputContent = document.getElementsByClassName('input__search')[0].value;

    const regex = new RegExp(inputContent)

    searchElements();


};
