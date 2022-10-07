
/* PERFIL PRINCIPAL DE LOS EVENTOS DEL APARTADO DE PERFIL */
import { showAccountContent, showPasswordContent } from "./events/select-option.js";

/* Evento de la cuenta */
const accountContainer = document.getElementsByClassName('account')[0];
accountContainer.addEventListener('click', showAccountContent);

/* Evento del elemento de password */
const passwordContainer = document.getElementsByClassName('password')[0];
passwordContainer.addEventListener('click', showPasswordContent);
