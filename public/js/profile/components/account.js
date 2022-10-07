
// User account options HTML
const getAccountHtml = () => {

    return (`
                <section class="account__settings">
                    <div class="user__settings">
                        <div class="setting">
                            <label class="setting__title" for="username">Username</label><br>
                            <input class="setting__input" name="username" type="text">
                        </div>

                        <div class="setting">
                                <label class="setting__title" for="email">Email</label><br>
                                <input class="setting__input" name="email" type="email">
                        </div>
                    </div>

                    <div class="user__preferences">
                        <div class="setting">
                            <label class="setting__title" for="language">Language</label><br>

                                <select class="setting__input" name="language" id="language">
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                </select>
                        </div>

                        <div class="setting">
                                <label class="setting__title" for="timezone">Timezone</label><br>

                                <select class="setting__input" name="timezone" id="timezone">
                                    <option value="GMT-12:00">GMT-12:00</option>
                                    <option value="GMT-11:00">GMT-11:00</option>
                                    <option value="GMT-10:00">GMT-10:00</option>
                                    <option value="GMT-09:00">GMT-09:00</option>
                                    <option value="GMT-08:00">GMT-08:00</option>
                                    <option value="GMT-07:00">GMT-07:00</option>
                                    <option value="GMT-06:00">GMT-06:00</option>
                                    <option value="GMT-05:00">GMT-05:00</option>
                                    <option value="GMT-04:00">GMT-04:00</option>
                                    <option value="GMT-03:00">GMT-03:00</option>
                                    <option value="GMT-02:00">GMT-02:00</option>
                                    <option value="GMT-01:00">GMT-01:00</option>
                                    <option value="GMT+00:00">GMT+00:00</option>
                                    <option value="GMT+01:00">GMT+01:00</option>
                                    <option value="GMT+02:00">GMT+02:00</option>
                                    <option value="GMT+03:00">GMT+03:00</option>
                                    <option value="GMT+04:00">GMT+04:00</option>
                                    <option value="GMT+05:00">GMT+05:00</option>
                                    <option value="GMT+06:00">GMT+06:00</option>
                                    <option value="GMT+07:00">GMT+07:00</option>
                                    <option value="GMT+08:00">GMT+08:00</option>
                                    <option value="GMT+09:00">GMT+09:00</option>
                                    <option value="GMT+10:00">GMT+10:00</option>
                                    <option value="GMT+11:00">GMT+11:00</option>
                                    <option value="GMT+12:00">GMT+12:00</option>
                                </select>
                        </div>
                    </div>

                    <div class="setting__buttons">
                        <button class="setting__save">Update</button>
                        <button class="setting__cancel">Cancel</button>
                    </div>
                </section>
        `)
}

export {
    getAccountHtml
}