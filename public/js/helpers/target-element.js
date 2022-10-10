
const targetElement = ( element, currentActiveElement, ariaClass ) => {
    // Eliminamos la clase active de todos los elementos que la tengan
    if (currentActiveElement) 
        currentActiveElement.classList.remove(ariaClass);

    // Mantenemos activo el elemento actual 
    element.classList.add(ariaClass);

} 

export {
    targetElement
}
