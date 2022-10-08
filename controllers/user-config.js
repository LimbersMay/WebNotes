const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const userSaveConfig = async ( req, res ) => {

    const { _id } = req.user;
    const { username, email, language, timezone } = req.body;

    const user = await User.findOneAndUpdate(
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
        user
    })
}

const userChangePassword = async( req, res ) => {

    const { newPassword } = req.body;
    const { _id } = req.user;

    const salt = bcryptjs.genSaltSync();
    const password = bcryptjs.hashSync(newPassword, salt);

    const user = await User.findOneAndUpdate(
        { _id }, // Query
        { password }, // Campos alterados
        { new: true } // Opciones adicionales
    )

    return res.status(200).json({
        user
    });
}

module.exports = {
    userSaveConfig,
    userChangePassword
}