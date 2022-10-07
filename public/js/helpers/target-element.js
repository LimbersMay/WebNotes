
const targetElement = ( element, currentActiveElement ) => {
    // Eliminamos la clase active de todos los elementos que la tengan
    if (currentActiveElement) 
        currentActiveElement.classList.remove('active');

    // Mantenemos activo el elemento actual 
    element.classList.add('active');

} 

export {
    targetElement
}
