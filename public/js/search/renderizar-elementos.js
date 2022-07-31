
export const renderizarElementos = ( notes, container ) => {

    // Ocultamos todos los elementos del contenedor
    for (let i = 0; i < container.children.length; i++) {
        container.children[i].style.display = 'none';
    }

    // Mostramos los elementos que coincidan con la búsqueda
    notes.forEach(note => {
        note.style.display = 'block';
    })

    console.log(notes);
}

