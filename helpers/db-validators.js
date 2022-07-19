const User = require("../models/user");

const existeEmail = async (email) => {

    const exist = await User.findOne({ email });

    if (exist) {
        throw new Error(`El correo ${ email } ya se encuentra registrado`);
    }
};

const existeNota = async(idNote, { req }) => {
        
    const { _id } = req.user;

    const note = await User.findOne(
        {
            _id,
            "notes": { "$elemMatch": { _id: idNote } } 
        }
    )

    if (note == null) {
        throw new Error(`La nota con el ID ${idNote} no existe`);
    }
};

module.exports = {
    existeEmail,
    existeNota
}