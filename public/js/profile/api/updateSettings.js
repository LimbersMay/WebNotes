import { getApiUrl } from "../../helpers/getApiUrl.js";

const updateAccountChangesAPI = async( bodyRequest ) => {

    /*  
        body = {
            username,
            email,
            language,
            timezone
        }
    */

    const response = await fetch(getApiUrl() + '/api/user-config/save-config', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest),
    });

    const bodyResponse = await response.json();

    return new Promise(( resolve, reject ) => {
        if ( !response.ok ) reject(bodyResponse.errors[0]); 
        resolve(bodyResponse);
    });
}
 
const updateAccountPasswordAPI = async( bodyRequest ) => {

    /*
    
        body = {
            currentPassword: '',
            newPassword: '',
            repeatPassword: ''
        }

    */

    const response = await fetch(apiUrl + '/api/user-config/change-password', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
    });

    const bodyResponse = await response.json();

    return new Promise(( resolve, reject ) => {
        if ( !response.ok ) reject(bodyResponse.errors[0]); 
        resolve(bodyResponse);
    });
}

export {
    updateAccountChangesAPI,
    updateAccountPasswordAPI
}
