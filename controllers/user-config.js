const User = require('../models/user');

const saveConfig = async (req, res) => {

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
        { multi: true }
    );

    return res.status(200).json({
        user
    })
}

module.exports = {
    saveConfig
}