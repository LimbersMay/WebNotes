
let apiUrl = (window.location.hostname.includes('localhost'))
    ? 'http://localhost:8080'
    : 'https://webnoteseasy.herokuapp.com';

const getAccountDataAPI = async() => {
    const response = await fetch(apiUrl + '/api/user-config/get-config');
    return response.json();
}

const getAccountLangDictionaryAPI = async( component ) => {
    const response = await fetch(apiUrl + `/api/user-config/get-langDictionary/${ component }`);
    return response.json();
}

export {
    getAccountDataAPI,
    getAccountLangDictionaryAPI
}