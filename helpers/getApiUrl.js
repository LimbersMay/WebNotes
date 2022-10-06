module.exports = getApiUrl = () => {

    if (process.env.NODE_ENV === 'production') {
        return 'https://webnoteseasy.herokuapp.com';
    }

    return 'http://localhost:8080';
}