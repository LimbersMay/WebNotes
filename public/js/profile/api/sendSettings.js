let apiUrl = (window.location.hostname.includes('localhost')) 
    ? 'http://localhost:8080'
    : 'https://webnoteseasy.herokuapp.com';

const sendAccountChanges = async( bodyRequest ) => {

    /*  
        body = {
            username,
            email,
            language,
            timezone
        }
    */

    const response = await fetch(apiUrl + '/api/user-settings/saveSettings', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest),
    });

    const bodyResponse = await response.json();
    
    return bodyResponse;
}

