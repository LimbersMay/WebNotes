
// Función para enviar los datos a la base de datos
const sendData = (idNote, title, content, date) => {
    // Enviamos los datos usando fetch 

    const body = {
        idNote,
        title,
        content,
        date
    };

    return new Promise(async(resolve, reject) => {

        const bodyResponse = await fetch('http://localhost:8080/api/note/saveNote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        let { id, errors } = await bodyResponse.json();

        errors = Object.entries(errors.errors);

        // Si ocurrió un error al hacer la petición 
        if (errors.length > 0) {
            return reject(errors);
        }

        resolve(id);
    });
}

const deleteNoteDb = async(id) => {

};

export default sendData;