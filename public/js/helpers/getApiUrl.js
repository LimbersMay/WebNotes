
export const getApiUrl = () => {
    let apiUrl = (window.location.hostname.includes('localhost')) 
    ? 'http://localhost'
    : 'https://webnoteseasy.herokuapp.com';

    return apiUrl;
}
