
//Middleware: intercepts request and add on hello to req

//@ desc Logs request to console
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)

    next();
}

module.exports = logger;