// This the controller for all req and res for /dashboard route

// @desc Get and displays dashboard
// @route GET api/v1/dashboard
// @access Private
exports.getDashboard = (req, res, next) => {
    res.status(200).send(`<h1>Dashboard Page for user ${req.params.id}</h1>`);
}