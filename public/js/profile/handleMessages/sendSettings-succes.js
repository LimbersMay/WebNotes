const handleMessage = ( element, message, id ) => {
    element.id = id;
    element.innerHTML = message;
}

const showSucessMessage = ( response, { target } ) => {

    if ( response.username ) {
        const usernameMessageHtml = target.getElementsByClassName('username__message')[0];
        handleMessage(usernameMessageHtml, response.messages.username, 'request__successfull');
    }

    if ( response.email ) {
        const emailMessageHtml = target.getElementsByClassName('email__message')[0];
        handleMessage(emailMessageHtml, response.messages.email, 'request__successfull');
    }

    if ( response.language ) {
        const languageMessageHtml = target.getElementsByClassName('language__message')[0];
        handleMessage(languageMessageHtml, response.messages.language, 'request__successfull');
    }

    if ( response.timezone ) {
        const timezoneMessageHtml = target.getElementsByClassName('timezone__message')[0];
        handleMessage(timezoneMessageHtml, response.messages.timezone, 'request__successfull');
    }

}

export {
    showSucessMessage
}
