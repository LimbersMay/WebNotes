
// Función para enviar los datos a la base de datos
const sendData = async(title, content, date) => {
    // Enviamos los datos usando fetch 

    const body = {
        title,
        content,
        date
    };

    const bodyResponse = await fetch('http://localhost:8080/api/note/saveNote', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return bodyResponse.json();
}

export default sendData;