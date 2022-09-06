

const getTimeZone = (req, res, next) => {

    let { timezone } = req.body;

    if (!timezone) {
        timezone = req.query.timezone;
    }

    process.env.TZCLIENT = timezone;
    
    next();
}

module.exports = getTimeZone;