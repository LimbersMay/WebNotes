import { sendAccountPassword } from "../events/sendSettings.js";

const getPasswordHtml = () => {

    const passwordHtml = `
        <form class="account__settings" onsubmit="">
            <div class="user__settings">
                <div class="setting">
                    <label class="setting__title" for="password">Current password</label><br>
                    <input autocomplete="on" class="setting__input" name="currentPassword" type="password">
                </div>

                <div class="setting">
                    <label class="setting__title" for="newPassword">New password</label><br>
                    <input class="setting__input" name="newPassword" type="password">
                </div>
            </div>

            <div class="user__preferences">
                <div class="setting">
                    <label class="setting__title" for="repeatPassword">Repeat password</label><br>
                    <input class="setting__input" name="repeatPassword" type="password">
                </div>
            </div>

            <div class="setting__buttons">
                <button type="submit" class="setting__save">Update</button>
                <button class="setting__cancel">Cancel</button>
            </div>
        </form>
    `

    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(passwordHtml, 'text/html').body;

    parsedHtml = parsedHtml.getElementsByClassName('account__settings')[0];

    // Le agregamos al botón de guardar la función de sendSettings
    parsedHtml.addEventListener('submit', sendAccountPassword);

    return parsedHtml;
}

export {
    getPasswordHtml
};
