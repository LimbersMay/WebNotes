const getPasswordHtml = () => {
    return `
    <section class="account__settings">
        <div class="user__settings">
            <div class="setting">
                <label class="setting__title" for="password">Current password</label><br>
                <input class="setting__input" type="text">
            </div>

            <div class="setting">
                <label class="setting__title" for="repeatPasswird">Repeat password</label><br>
                <input class="setting__input" type="email">
            </div>
        </div>

        <div class="setting__buttons">
            <button class="setting__save">Update</button>
            <button class="setting__cancel">Cancel</button>
        </div>
    </section>
    `
}

export {
    getPasswordHtml
};
