import makeVisible from '../events/make-visible.js';


const renderElement = (htmlContent, parent) => {

    // Verificamos que la pantalla este debajo de los 500pxs
    if (screen.width < 500) {
        makeVisible('input');
    }

    parent.insertAdjacentHTML('beforeend', htmlContent)
}

export default renderElement;
