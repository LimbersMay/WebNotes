module.exports = getApiUrl = () => {

    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost';
    }

    return 'https://webnoteseasy.herokuapp.com';
}