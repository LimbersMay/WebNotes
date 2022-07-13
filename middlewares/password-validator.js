
const validatePassword = (value, {req}) => {

    const { password_repeat } = req.body;

    if (value !== password_repeat) {
        throw new Error('Las contraseñas deben ser iguales');
    }
    else {
        return true;
    }
};

module.exports = validatePassword;