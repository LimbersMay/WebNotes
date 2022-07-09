const bcrypt = require('bcryptjs');
const { response } = require('express');

const login = async(req, res = response) => {

    res.json({
        status: 'Funcionando'
    })

};

module.exports = {
    login
}