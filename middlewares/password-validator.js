const bcryptjs = require('bcryptjs');

const validatePassword = (value, { req }) => {

    const { password_repeat } = req.body;

    if (value !== password_repeat) {
        throw new Error('Passwords must be equal');
    }
    else {
        return true;
    }
};


const validatePasswordChange = ( currentPassword, { req } ) => {
    
    const { user } = req;

    // Verificamos que la contraseña actual sea correcta
    const match = bcryptjs.compareSync( currentPassword, user.password );

    if (!match) {
        throw new Error('Current password incorrect');
    } else {
        return true;
    }
}

module.exports = {
    validatePassword,
    validatePasswordChange
};