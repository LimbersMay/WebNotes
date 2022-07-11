const bcrypt = require('bcryptjs');
const { response, request } = require('express');

const login = async(req = request, res = response) => {

    const { email, password } = req.body;

    res.json({
        userEmail: email,
        userPassword: password
    })

};

module.exports = {
    login
}