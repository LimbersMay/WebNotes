import { updateAccountChangesAPI } from "../api/updateSettings.js";

const sendAccountChanges = async(event, bodyHtml) => {

    // Obtenemos los elementos que nos interesa del body 
    const username = bodyHtml.getElementsByClassName('username')[0].value;
    const email = bodyHtml.getElementsByClassName('email')[0].value;
    const language = bodyHtml.getElementsByClassName('language')[0].value;
    const timezone = bodyHtml.getElementsByClassName('timezone')[0].value;

    const body = {
        language,
        timezone
    }

    if ( username !== '' ) body.username = username;
    if ( email !== '' )    body.email = email;
    
    const response = await updateAccountChangesAPI(body);
    console.log(response);
}

export {
    sendAccountChanges
}
