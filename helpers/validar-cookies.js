
const validarCookies = (req, res, view) => {

    console.log('Referencia: ', req.get('referer'))

    if (req.cookies["Errors"] != undefined) {
        const errors = req.cookies["Errors"];
        res.clearCookie("Errors", { httpOnly: true });

        return res.render(view, {
            tittle: 'Considere lo siguiente: ',
            errors: errors
        });
    }
}

module.exports = validarCookies;