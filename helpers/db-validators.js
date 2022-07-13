const User = require("../models/user");

const existeEmail = async (email) => {

    const existe = await User.findOne({ email });

    if (existe) {
        throw new Error(`El correo ${ email } ya se encuentra registrado`);
    }
};

module.exports = {
    existeEmail
}