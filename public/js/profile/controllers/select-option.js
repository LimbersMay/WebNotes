import makeVisible from "../../events/make-visible.js";
import { targetElement } from "../../helpers/target-element.js";

const showAccountContent = ({ target }) => {

    const currentActiveElement = document.getElementsByClassName('active')[0];
    const currentActiveOption = document.getElementsByClassName('active__option')[0];
        
    // Mantenemos activo al elemento actual seleccionado
    targetElement( target, currentActiveElement, 'active' );

    // Obtenemos el HTML del perfil 
    const accountHtml = document.getElementById('account__options');

    // Hacemos target al componente de la cuenta para que se muestre en pantalla
    targetElement( accountHtml, currentActiveOption, 'active__option' );

    // Verificamos el tamaño de la pantalla
    if (screen.width < 500) makeVisible('input');
}   

const showPasswordContent = ({ target }) => {

    const currentActiveElement = document.getElementsByClassName('active')[0];
    const currentActiveOption = document.getElementsByClassName('active__option')[0];

    if (currentActiveElement === target) return;

    // Mantenemos activo al elemento actual seleccionado
    targetElement( target, currentActiveElement, 'active');

    // Obtenemos el HTML del password 
    const passwordHtml = document.getElementById('account__password');

    // Lo renderizamos solo si no está activo
    targetElement( passwordHtml, currentActiveOption, 'active__option' );

    // Verificamos el tamaño de la pantalla
    if (screen.width < 500) makeVisible('input');
}

export {
    showAccountContent,
    showPasswordContent
}
