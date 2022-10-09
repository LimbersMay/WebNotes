import { renderElement } from "../../helpers/render_element.js";
import { targetElement } from "../../helpers/target-element.js";
import { getAccountHtml } from "../components/account.js"
import { getPasswordHtml } from "../components/password.js";
import { getAccountSettings } from "./getSettings.js";

const settingsContainer = document.getElementsByClassName('notes__content__container')[0];

const showAccountContent = ({ target }) => {

    const currentActiveElement = document.getElementsByClassName('active')[0];

    if (currentActiveElement === target) return;
        
    // Mantenemos activo al elemento actual seleccionado
    targetElement( target, currentActiveElement );

    // Obtenemos el HTML del perfil 
    const accountHtml = getAccountHtml();

    // Lo renderizamos solo si no está activo
    renderElement( accountHtml, settingsContainer );

    // Mostramos las configuraciones previas del usuario 
    getAccountSettings( accountHtml );
}   

const showPasswordContent = ({ target }) => {

    const currentActiveElement = document.getElementsByClassName('active')[0];

    if (currentActiveElement === target) return;

    // Mantenemos activo al elemento actual seleccionado
    targetElement( target, currentActiveElement);

    // Obtenemos el HTML del password 
    const passwordHtml = getPasswordHtml();

    // Lo renderizamos solo si no está activo
    renderElement( passwordHtml, settingsContainer );
}

export {
    showAccountContent,
    showPasswordContent
}
