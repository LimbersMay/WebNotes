
// Función para enviar los datos a la base de datos
const sendData = (title, content, date) => {
    // Enviamos los datos usando fetch 

    const body = {
        title,
        content,
        date
    };

    fetch('http://localhost:8080/api/note/saveNote', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

export default sendData;