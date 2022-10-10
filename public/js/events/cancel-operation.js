import makeVisible from "./make-visible.js";

const cancelUpdate = () => {

    // Comprobamos si nos encontramos en un dispositivo pequeño
    if (screen.width < 500) {

        makeVisible('list');
    }

}

export {
    cancelUpdate
}