import { updateAccountChangesAPI, updateAccountPasswordAPI } from "../api/updateSettings.js";
import { handlePasswordError } from "../messageHandling/sendSettings.js";

const handleMessage = ( element, classList, message ) => {
    element.classList.add(classList);
    element.innerHTML = message;
}

const sendAccountChanges = async (event) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    const bodyRequest = Object.fromEntries(formData);

    const response = await updateAccountChangesAPI(bodyRequest);
    console.log(response);
}

const sendAccountPassword = async( event ) => {

    event.preventDefault();

    // Obtenemos el elemento de mensaje de contraseña
    const passwordMessageHtml = event.target.getElementsByClassName('password__message')[0];

    const formData = new FormData(event.target);
    const bodyRequest = Object.fromEntries(formData);

    console.log(bodyRequest);

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
