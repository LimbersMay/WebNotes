const User = require("../models/user");

const existeEmail = async(correo) => {

    const existe = await User.findOne({correo});

    if (existe) {
        throw new Error(`El correo ${correo} ya se encuentra registrado`);
    }
};

module.exports = {
    existeEmail
}