
// Obtenemos el input oculto de la fecha 
const fechaInput = document.getElementsByClassName('date__hidden')[0];
const zonaActual = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Incrustamos la preferencia del lenguaje al input
const lenguajeInput = document.getElementsByClassName('language__hidden')[0];
const lenguaje = window.navigator.userLanguage || window.navigator.language;

if (fechaInput && lenguajeInput) {
    // Le incrustamos la zona actual en el input oculto
    fechaInput.value = zonaActual;
    lenguajeInput.value = lenguaje;
}

const loginButton = document.getElementById('google-sigin');

if ( loginButton ) {
    loginButton.setAttribute('href', loginButton.getAttribute('href') + '?timezone=' + zonaActual);
}

// Formateamos la fecha actual
const formatDate = (date) => {

    // Saber si el idioma es español
    const es = Intl.DateTimeFormat().resolvedOptions().locale.includes('es');

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (es) {
        months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    }

    let dateFormatted = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + (date.getHours() % 12 || 12) + ":";

    if (date.getMinutes() < 10) {
        dateFormatted += "0" + date.getMinutes();
    }
    else {
        dateFormatted += date.getMinutes();
    }

    if (date.getHours() >= 12) {
        dateFormatted += " PM";
    }
    else {
        dateFormatted += " AM";
    }

    return dateFormatted;
}

export default formatDate;