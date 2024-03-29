const User = require('../models/user');
const momentTz = require("moment-timezone");

// Métodos de las notas para guardar y eliminar
const saveNote = async( req, res ) => {

    // Obtenemos al usuario autenticado 
    const { _id, preferences } = req.user;

    // Creamos un nuevo elemento de Nota
    const { idNote, title, content } = req.body;

    const currentDate = momentTz().utc(preferences.timezone).format('LLL');
    
    // Si el Id de la nota no está vacío, quiere decir que debemos actualizar la nota
    if (idNote !== '') {

        await User.findOneAndUpdate(
            // Condiciones para filtrar
            {
                _id,
                "notes": { "$elemMatch": { _id: idNote } } 
            },

            // Elemento a actualizar
            {
                "$set": { 
                    "notes.$.title": title,
                    "notes.$.content": content,
                    "notes.$.modified_at": currentDate
                }
            }
        )
        
        return res.status(200).json({
            id: idNote
        });
    }

    // En caso de que la nota sea nueva 
    // Agregamos la nota en el arreglo de notas del usuario

    const note = {
        title,
        content,
        date: currentDate,
        modified_at: currentDate
    }

    const user = await User.findOneAndUpdate(
        {_id}, // Filtro
        {
            $push: { // Hacemos un push en la posición 0 del elemento
                notes: {
                    $each: [note],
                    $position:0
                }
        }}, 
        {new: true}
    );

    // Obtenemos el ID del último elemento modificado 
    const lastNoteId = user.notes[0]._id;

    return res.status(200).json({
        id: lastNoteId
    });
}

const removeNote = async( req, res ) => {

    // Obtenemos el Id del usuario autentificado
    const { _id } = req.user;

    // Obtenemos el Id de la nota a eliminar
    const { idNote } = req.body;

    await User.findOneAndUpdate(
        // Filtros para encontrar la nota
        {
            _id,
        },
        {
            $pull: {
                notes: {
                    _id: idNote
                }
            }
        }
    )

    return res.status(200).json({
        msg: 'Everything is Ok'
    });
}

module.exports = {
    saveNote,
    removeNote
}
