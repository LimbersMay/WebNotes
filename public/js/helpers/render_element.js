import makeVisible from '../events/make-visible.js';

const renderElement = (htmlElement, parent) => {

    // Verificamos que la pantalla este debajo de los 500pxs
    if (screen.width < 500) {
        makeVisible('input');
    }

    // Limpiamos la pantalla actual 
    parent.innerHTML = '';
    parent.appendChild(htmlElement);
}

export {
    renderElement
};
