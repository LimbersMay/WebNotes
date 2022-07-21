
// Obtenemos el input oculto de la fecha 
const fechaInput = document.getElementsByClassName('date__hidden')[0];

// Le incrustamos la zona actual en el input oculto
const zonaActual = Intl.DateTimeFormat().resolvedOptions().timeZone;
fechaInput.value = zonaActual;