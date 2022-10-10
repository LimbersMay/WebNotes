import { getAccountLangDictionaryAPI } from "../api/getSettings.js";
import { cancelUpdate } from "../controllers/cancel-operation.js";
import { sendAccountPassword } from "../controllers/sendSettings.js";

const passwordDictionary = await getAccountLangDictionaryAPI('userPassword');

const getPasswordHtml = () => {

    const passwordHtml = `
        <form class="account__settings" onsubmit="">
            <div class="user__settings">
                <div class="setting">
                    <label class="setting__title" for="password">${ passwordDictionary.current_password }</label><br>
                    <input autocomplete="on" class="setting__input" name="currentPassword" type="password">
                </div>

                <div class="setting">
                    <label class="setting__title" for="newPassword">${ passwordDictionary.new_password }</label><br>
                    <input class="setting__input" name="newPassword" type="password">
                </div>
            </div>

            <div class="user__preferences">
                <div class="setting">
                    <label class="setting__title" for="repeatPassword">${ passwordDictionary.repeat_password }</label><br>
                    <input class="setting__input" name="repeatPassword" type="password">
                </div>

                <div class="password__message">
                    
                </div>
            </div>

            <div class="setting__buttons">
                <button type="submit" class="setting__save">Update</button>
                <button type="cancel" class="setting__cancel">Cancel</button>
            </div>
        </form>
    `

    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(passwordHtml, 'text/html').body;

    parsedHtml = parsedHtml.getElementsByClassName('account__settings')[0];

    // Le agregamos al botón de guardar la función de sendSettings
    parsedHtml.addEventListener('submit', sendAccountPassword);
    parsedHtml.getElementsByClassName('setting__cancel')[0].addEventListener('click', cancelUpdate);

    return parsedHtml;
}

export {
    getPasswordHtml
};
