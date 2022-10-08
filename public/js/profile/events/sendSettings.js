import { updateAccountChangesAPI, updateAccountPasswordAPI } from "../api/updateSettings.js";

const sendAccountChanges = async(event) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    const bodyRequest = Object.fromEntries(formData);
    
    const response = await updateAccountChangesAPI(bodyRequest);
    console.log(response);
}

const sendAccountPassword = async( event ) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    const bodyRequest = Object.fromEntries(formData);

    const response = await updateAccountPasswordAPI(bodyRequest);
    console.log(response);
}

export {
    sendAccountChanges,
    sendAccountPassword
}
