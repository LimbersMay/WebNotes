let apiUrl = (window.location.hostname.includes('localhost')) 
    ? 'http://localhost:8080'
    : 'https://webnoteseasy.herokuapp.com';

const updateAccountChangesAPI = async( bodyRequest ) => {

    /*  
        body = {
            username,
            email,
            language,
            timezone
        }
    */

    const response = await fetch(apiUrl + '/api/user-config/save-config', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest),
    });

    return response.json();
}

export {
    updateAccountChangesAPI
}
