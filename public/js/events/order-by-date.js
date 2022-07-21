
/*
    { elemento: date }
    { elemento: date }
*/

const orderDates = () => {

    // Obtenemos todos los elementos de nota del DOM
    const dateElements = document.getElementsByClassName('notes__note');

    /* Fechas
        {
            idElemento: fecha,
            idElemento: fecha,
        }
    */

    let dates = {};

    // Guardamos en un arreglo sus atributos de fecha
    for (let i = 0; i < dateElements.length; i++) {
        dates[dateElements[i].id] = dateElements[i].getAttribute('modified_at');;
    }

    // Ordenamos los elementos de fecha del más nuevo al más viejo
    dates = Object.keys(dates).sort((a, b) => {
        return new Date(dates[b]) - new Date(dates[a]);
    });

    // Ordenamos los elementos de nota
    dates.forEach((id, i) => {
        // Obtenemos el elemento de la nota
        const note = document.getElementById(id);
        note.style.order = i;
    }); 
}


export default orderDates;