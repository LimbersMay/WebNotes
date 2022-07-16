
const validatePassword = (value, {req}) => {

    const { password_repeat } = req.body;

    if (value !== password_repeat) {
        throw new Error('Passwords must be equal');
    }
    else {
        return true;
    }
};

module.exports = validatePassword;