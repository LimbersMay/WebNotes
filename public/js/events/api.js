// Función para enviar los datos a la base de datos
const saveNoteDb = (idNote, title, content) => {
    // Enviamos los datos usando fetch 

    // Fecha para el servidor
    let dateClient = new Date().toUTCString();

    const body = {
        idNote,
        title,
        content,
        dateClient
    };

    return new Promise(async(resolve, reject) => {

        const bodyResponse = await fetch('https://webnoteseasy.herokuapp.com/api/note/saveNote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        let { id, errors } = await bodyResponse.json();
        
        // Si ocurrió un error al hacer la petición lo devolvemos en la promesa
        if (errors !== undefined) {
            errors = Object.entries(errors.errors);
            return reject(errors);
        }

        resolve(id);
    });
}

const removeNoteDb = (idNote) => {

    const body = { idNote };

    return new Promise(async(resolve, reject) => {

        const bodyResponse = await fetch('https://webnoteseasy.herokuapp.com/api/note/removeNote', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        let { errors } = await bodyResponse.json();

        // Si hay errores, llamamos al reject
        if (errors !== undefined) {
            errors = Object.entries(errors.errors);
            return reject(errors);
        }

        // Si no ocurre ningún error
        resolve(null);
    })
};

export {
    saveNoteDb,
    removeNoteDb
}