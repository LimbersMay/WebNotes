
const getUserLangDictionary = ( req ) => {

    language = null;

    if ( !req.user ) {
        language = require('../language/en/index');
        return language;
    }

    const { preferences } = req.user;

    if (preferences.language === 'en-US') {
        language = require('../language/en/index');
        return language;
    }

    language = require('../language/es/index');
    return language;
}

module.exports = {
    getUserLangDictionary
};