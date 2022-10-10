const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const { getUserLangDictionary } = require('../helpers/user-preferences');

const putUserConfig = async ( req, res ) => {

    const { _id } = req.user;
    const { username, email, language, timezone } = req.body;

    /* Obtenemos solo los elementos que han cambiado */
    const { user } = req;

    const query = {
        username: username !== user.username ? username : undefined,
        email: email !== user.email ? email : undefined,
        language: language !== user.preferences.language ? language : undefined,
        timezone: timezone !== user.preferences.timezone ? timezone : undefined
    };

    await User.updateOne(
        { _id },
        {
            username,
            email,
            preferences: {
                language,
                timezone
            }
        },
        { multi: true, new: true}
    );

    const bodyResponse = {...query, messages: {
        username: 'Username updated successfully',
        email: 'Email updated successfully',
        language: 'Language updated successfully',
        timezone: 'Timezone updated successfully'
    }}

    return res.status(200).json(
        bodyResponse
    );
}

const putUserPassword = async( req, res ) => {

    const { newPassword } = req.body;
    const { _id } = req.user;

    const salt = bcryptjs.genSaltSync();
    const password = bcryptjs.hashSync(newPassword, salt);

    await User.updateOne(
        { _id }, // Query
        { password }, // Campos alterados
        { new: true } // Opciones adicionales
    )

    return res.status(200).json({
        msg: 'Password changed successfully'
    });
}

const getUserConfig = ( req, res ) => {

    const { email, username, preferences, provider } = req.user;

    const bodyResponse = {
        email,
        username,
        language: preferences.language,
        timezone: preferences.timezone,
        provider
    }

    res.status(200).json(
        bodyResponse
    );
}



module.exports = {
    putUserConfig,
    putUserPassword,
    getUserConfig,
    getUserLangDict
}