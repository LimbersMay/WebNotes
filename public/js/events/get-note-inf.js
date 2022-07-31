export const getNoteInformation = () => {

    const inputTitle = document.getElementsByClassName('input__title')[0];
    const inputContent = document.getElementsByClassName('input__body')[0];
    const modifiedAtElement = document.getElementsByClassName('modified__at')[0];

    return {
        inputTitle,
        inputContent,
        modifiedAtElement
    }
}

