import { getNoteInformation } from './get-note-inf.js';
import makeVisible from './make-visible.js';

// Método para mostrar la información de la tarjeta tarea en la parte de donde está el textarea
const showInput = (event = event) => {

    if (!event.target.classList.contains('notes__note')) {
        return;
    }
    
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
    const { inputTitle, inputContent, modifiedAtElement } = getNoteInformation();

    modifiedAtElement.innerHTML = `Modified at: ${elemento.getAttribute('modified_at')}`;

    // Le asignamos el valor del titulo
    inputTitle.value = titulo;

    // Le asignamos el valor del contenido
    inputContent.value = contenido;
}

export default showInput;