
/*
    { elemento: date }
    { elemento: date }
*/

let elements = {

};

const orderDates = () => {

    // Obtenemos todos los elementos de nota del DOM
    const dateElements = document.getElementsByClassName('note__date');

    let dates = [];

    // Recorremos todos los elementos de fecha
    for (let i = 0; i < dateElements.length; i++) {
        elements[dateElements[i].parentElement] = Date.parse(dateElements[i].innerHTML).toLocaleString();
        dates.push(Date.parse(dateElements[i].innerHTML).toLocaleString());
    }

    // Ordenamos los elementos de fecha
    dates.sort((a, b) => a - b);

    console.log(elements);
    console.log(dates);
}


export default orderDates;