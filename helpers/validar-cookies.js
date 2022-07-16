
const validarCookies = (req, res) => {

    if (req.cookies["Errors"] != undefined) {
        const errors = req.cookies["Errors"];
        res.clearCookie("Errors", { httpOnly: true });

        return errors;
    }
}

module.exports = validarCookies;