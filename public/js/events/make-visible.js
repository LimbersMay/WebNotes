// MÉTODO PARA HACER VISIBLE EL INPUT O LA LISTA DE TODAS LAS NOTAS
const makeVisible = (content) => {

    // Contenedor de las tareas 
    const contenedorTareas = document.getElementsByClassName('profile__container')[0];

    // Contenedor del input en donde se escribe la nota
    const contenedorNota = document.getElementsByClassName('notes__content__container')[0];

    if (content === 'input') {
        contenedorNota.style.display = 'block';
        contenedorNota.style.width = '100%';

        contenedorTareas.style.display = 'none';
    } 

    if (content === 'list') {
        contenedorTareas.style.display = 'block';
        contenedorTareas.style.width = '100%';

        contenedorNota.style.display = 'none';
    }
}

export default makeVisible;