

const getTimeZone = (req, res, next) => {

    const { timezone } = req.body;
    process.env.TZCLIENT = timezone;
    
    next();
}

module.exports = getTimeZone;