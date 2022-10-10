import { updateAccountChangesAPI, updateAccountPasswordAPI } from "../api/updateSettings.js";
import { showSucessMessage } from "../handleMessages/sendSettings-succes.js";

const handleMessage = ( element, id, message ) => {
    element.id = id;
    element.innerHTML = message;
}

const sendAccountChanges = async (event) => {

    event.preventDefault();

    const emailMessageHtml = event.target.getElementsByClassName('email__message')[0];

    const formData = new FormData(event.target);
    const bodyRequest = Object.fromEntries(formData);

    try {
        const response = await updateAccountChangesAPI(bodyRequest);
        showSucessMessage( response, event );
    } catch ( error ) {
        console.log(error);
        handleMessage( emailMessageHtml, 'email__exception', error.msg);
    }
}

const sendAccountPassword = async( event ) => {

    event.preventDefault();

    // Obtenemos el elemento de mensaje de contraseña
    const passwordMessageHtml = event.target.getElementsByClassName('password__message')[0];

    const formData = new FormData(event.target);
    const bodyRequest = Object.fromEntries(formData);

    // Verificamos que ambas contraseñas coincidan
    if ( bodyRequest.newPassword !== bodyRequest.repeatPassword ) {
        handleMessage(passwordMessageHtml, 'password__exception', 'Passwords must be equal')
        return;
    }

    try {
        const response = await updateAccountPasswordAPI(bodyRequest);
        handleMessage(passwordMessageHtml, 'password__successful', response.msg);

    } catch( error ) {
        handleMessage(passwordMessageHtml, 'password__exception', error.msg);
    }
}

export {
    sendAccountChanges,
    sendAccountPassword
}
