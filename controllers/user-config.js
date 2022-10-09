const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const putUserConfig = async ( req, res ) => {

    const { _id } = req.user;
    const { username, email, language, timezone } = req.body;

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
        { multi: true, new: true }
    );

    return res.status(200).json({
        msg: 'Email changed successfully'
    })
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

    const { email, username, preferences } = req.user;

    const bodyResponse = {
        email,
        username,
        language: preferences.language,
        timezone: preferences.timezone
    }

    res.status(200).json(
        bodyResponse
    );
}

module.exports = {
    putUserConfig,
    putUserPassword,
    getUserConfig
}