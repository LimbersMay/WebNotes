const { request } = require('express');
const User = require('../models/user');

// Métodos de las notas para guardar y eliminar
const saveNote = async(req = request, res) => {

    // Obtenemos al usuario autenticado 
    const { _id } = req.user;

    // Creamos un nuevo elemento de Nota
    const { idNote, title, content, date } = req.body; 

    const note = {
        title,
        content,
        date
    }

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
                    "notes.$.content": content
                }
            }
        )
        
        return res.status(200).json({
            id: idNote
        });
    }

    // En caso de que la nota sea nueva 
    // Agregamos la nota en el arreglo de notas del usuario
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

const removeNote = (req, res) => {

}

module.exports = {
    saveNote,
    removeNote
}
