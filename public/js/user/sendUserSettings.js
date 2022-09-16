// Cuando cargemos la página por primera vez, se enviará al servidor las preferencias del usuario 

let apiUrl = (window.location.hostname.includes('localhost')) 
    ? 'http://localhost:8080'
    : 'https://webnoteseasy.herokuapp.com';

// PREFERENCIAS DE ZONA HORARIA
// Obtenemos el input oculto de la fecha 
const zonaActual = Intl.DateTimeFormat().resolvedOptions().timeZone;

// PREFERENCIAS DE IDIOMA
const lenguaje = window.navigator.userLanguage || window.navigator.language;

const body = {
    userTimeZone: zonaActual,
    userLang: lenguaje
}

// Llamamos al endpoint con las preferencias del usuario 
const res = await fetch(` ${apiUrl}/user/get-preferences`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
});
