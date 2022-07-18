// Obtenemos todos los elementos y les asignamos el evento para determinar si la pantalla debe ocultarse  o no 

import {makeVisible} from './helpers.js';

const mostrarInput = (event = event) => {
    
    event.preventDefault();

    // Al hacer click pueden pasar 2 cosas, muestro el contenido del lado derecho o oculto la ventana para mostrar la otra

    // CASO 1. EN CASO DE QUE ESTEMOS EN UN DISPOSITIVO MOVIL QUEREMOS OCULTAR LAS TAREAS Y MOSTRAR LA PANTALLA PARA AGREGAR UNA NUEVA TAREA 

    // Verificamos que la pantalla este debajo de los 500pxs
    if (screen.width < 500) {
        makeVisible('input');
    }

    // CASO 2. EN CASO DE ESTAR EN UNA COMPUTADORA, QUEREMOS MOSTRAR EL CONTENIDO DE LA TAREA DEL LADO DERECHO 
    
    // Obtenemos el elemento del que se hizo click
    const elemento = event.target;
    
    // Obtenemos sus hijos
    const hijos = elemento.children;

    // Obtenemos el contenido de la nota
    const titulo = hijos.item(0).innerHTML;
    const contenido = hijos.item(1).innerHTML;;

    // AHORA PONEMOS LA INFORMACIÓN DEL LADO DERECHO
    // Obtenemos el textarea del titulo y del contenido
    const inputTittle = document.getElementsByClassName('input__title')[0];

    const inputContent = document.getElementsByClassName('input__body')[0];

    // Le asignamos el valor del titulo
    inputTittle.value = titulo;

    // Le asignamos el valor del contenido
    inputContent.value = contenido;
}

// FUNCION PARA TARGETEAR LA NOTA QUE HA SIDO SELECCIONADA
const targetNota = (elementoSeleccionado) => {

    // Le asignamos la clase active
    elementoSeleccionado.classList.add('active');
} 

// FUNCIÓN PARA REMOVER EL TARGET DE UNA NOTA CUANDO OTRA ES SELECCIONADA
const removeTargetNota = (event = event) => {

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
    targetNota(elemento);
}

const notas = document.getElementsByClassName('notes__note');

// Les agregamos el evento a cada una de las tareas
for (let i = 0; i < notas.length; i++) {

    notas.item(i).addEventListener('click', removeTargetNota);

    notas.item(i).addEventListener('click', mostrarInput);
}

export {
    mostrarInput,
    removeTargetNota
};