import { getAccountDataAPI } from "../api/getSettings.js";

const getAccountSettings = async( accountHtml ) => {

    const bodyResponse = await getAccountDataAPI();

    // Ponemos la información en la pantalla
    const usernameElement = accountHtml.getElementsByClassName('username')[0];
    const emailElement    = accountHtml.getElementsByClassName('email')[0];
    const languageElement = accountHtml.getElementsByClassName('language')[0];
    const timezoneElement = accountHtml.getElementsByClassName('timezone')[0];

    usernameElement.value = bodyResponse.username;
    emailElement.value = bodyResponse.email;
    languageElement.value = bodyResponse.language;
    timezoneElement.value = bodyResponse.timezone;
}

export {
    getAccountSettings
}
