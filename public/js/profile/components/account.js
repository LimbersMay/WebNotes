import { sendAccountChanges } from "../events/sendSettings.js";

// User account options HTML
const getAccountHtml = () => {

    const htmlElement = 
        `
            <section class="account__settings">
                <div class="user__settings">
                    <div class="setting">
                        <label class="setting__title" for="username">Username</label><br>
                        <input class="setting__input username" name="username" type="text">
                    </div>

                    <div class="setting">
                            <label class="setting__title" for="email">Email</label><br>
                            <input class="setting__input email"  name="email" type="email">
                    </div>
                </div>

                <div class="user__preferences">
                    <div class="setting">
                        <label class="setting__title" for="language">Language</label><br>

                            <select class="setting__input language" name="language">
                                <option value="en-US">English</option>
                                <option value="es-ES">Spanish</option>
                            </select>
                    </div>

                    <div class="setting">
                            <label class="setting__title" for="timezone">Timezone</label><br>

                            <select class="setting__input timezone" name="timezone">
                                <option value="UTC-11:00">UTC-11:00</option>
                                <option value="UTC-10:00">UTC-10:00</option>
                                <option value="UTC-09:00">UTC-09:00</option>
                                <option value="UTC-8:00">UTC-08:00</option>
                                <option value="UTC-7:00">UTC-07:00</option>
                                <option value="UTC-6:00">UTC-06:00</option>
                                <option value="UTC-5:00">UTC-05:00</option>
                                <option value="UTC-4:00">UTC-04:00</option>
                                <option value="UTC-3:00">UTC-03:00</option>
                                <option value="UTC-2:00">UTC-02:00</option>
                                <option value="UTC-1:00">UTC-01:00</option>
                                <option value="UTC+0:00">UTC+00:00</option>
                                <option value="UTC+1:00">UTC+01:00</option>
                                <option value="UTC+2:00">UTC+02:00</option>
                                <option value="UTC+3:00">UTC+03:00</option>
                                <option value="UTC+4:00">UTC+04:00</option>
                                <option value="UTC+5:00">UTC+05:00</option>
                                <option value="UTC+6:00">UTC+06:00</option>
                                <option value="UTC+7:00">UTC+07:00</option>
                                <option value="UTC+8:00">UTC+08:00</option>
                                <option value="UTC+9:00">UTC+09:00</option>
                                <option value="UTC+10:00">UTC+10:00</option>
                                <option value="UTC+11:00">UTC+11:00</option>
                            </select>
                    </div>
                </div>

                <div class="setting__buttons">
                    <button class="setting__save">Update</button>
                    <button class="setting__cancel">Cancel</button>
                </div>
            </section>
        `
        
    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(htmlElement, 'text/html').body;

    parsedHtml = parsedHtml.getElementsByClassName('account__settings')[0];
    
    // Le agregamos el evento al botón de actualizar los datos
    parsedHtml.getElementsByClassName('setting__save')[0]
    .addEventListener('click', ( event ) => sendAccountChanges( event, parsedHtml ))

    return parsedHtml;
}

export {
    getAccountHtml
}