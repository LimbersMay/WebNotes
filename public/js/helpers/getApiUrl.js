
export const getApiUrl = () => {
    let apiUrl = (window.location.hostname.includes('localhost')) 
    ? 'http://localhost'
    : 'https://webnoteseasy.up.railway.app';

    return apiUrl;
}
