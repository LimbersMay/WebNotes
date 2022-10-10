import makeVisible from "../../events/make-visible.js";

const cancelUpdate = ( event ) => {

    event.preventDefault();

    // refresh the page
    location.reload();

}

export {
    cancelUpdate
}