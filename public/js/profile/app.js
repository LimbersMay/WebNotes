
/* PERFIL PRINCIPAL DE LOS EVENTOS DEL APARTADO DE PERFIL */
import { cancelUpdate } from "./controllers/cancel-operation.js";
import { showAccountContent, showPasswordContent } from "./controllers/select-option.js";
import { sendAccountChanges, sendAccountPassword } from "./controllers/sendSettings.js";

/* Evento de la cuenta */
const accountContainer = document.getElementsByClassName('account')[0];
accountContainer.addEventListener('click', showAccountContent);

/* Evento submit de la cuenta */
const accountForm = document.getElementById('account__options');
accountForm.addEventListener('submit', sendAccountChanges);

// Se simulará un click en el apartado de perfil solo si se encuentra actualmente en un dispositivo grande
if (screen.width > 500) accountContainer.click();

/* Evento del elemento de password */
const passwordContainer = document.getElementsByClassName('password')[0];
passwordContainer.addEventListener('click', showPasswordContent);

/* Evento submit del elemento de password */
const passwordForm = document.getElementById('account__password');
passwordForm.addEventListener('submit', sendAccountPassword);

/* Eventos de cancel de ambos formularios */
const cancelButtons = document.getElementsByClassName('setting__cancel');
console.log(cancelButtons);

for (let i = 0; i < cancelButtons.length; i++) {
    cancelButtons[i].addEventListener('click', cancelUpdate);
}
