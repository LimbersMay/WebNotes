import makeVisible from "../../events/make-visible.js";

const cancelUpdate = ( event ) => {

    // Comprobamos si nos encontramos en un dispositivo pequeño
    if (screen.width < 500) {
        
        makeVisible('list');
    }

}

export {
    cancelUpdate
}