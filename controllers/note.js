
// Métodos de las notas para guardar y eliminar
const saveNote = (req = Request, res) => {
    
    const { title, content, date } = req.body; 
        
    return res.status(200).json({
        title,
        content,
        date
    });
}

const removeNote = (req, res) => {

}

module.exports = {
    saveNote,
    removeNote
}
