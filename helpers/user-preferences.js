const getUserLangDictionary = () => {

    let language = null;

    if (process.env.USER_LANGUAGE === 'en-US') {
        language = require('../language/en/index.js')
        return language;
    }

    language = require('../language/es/index');
    return language;
}

module.exports = {
    getUserLangDictionary
};