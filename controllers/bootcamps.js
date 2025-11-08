// This are the function that get ran wher router in sever js get called for each route

// @desc Get all bootcamps
// @route GET api/v1/bootcamps
//@access Public
exports.getAllBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps" });
}

// @desc Get a single bootcamps
// @route GET api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg:`Display a single bootcamp with id: ${req.params.id}` });
}

// @desc Create new bootcamps
// @route POST api/v1/bootcamps/:id
// @access Private
exports.createBootcamp = (req, res, next) => {
    res.status(201).json({ success: true, msg:"Create new bootcamp" });
}

// @desc update bootcamps
// @route PUT api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
     res.status(201).json({ success: true, msg:`Update bootcamp with id: ${req.params.id}` });
}


// @desc delete bootcamps
// @route DELETE api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
     res.status(200).json({ success: true, msg:`Delete bootcamp with id: ${req.params.id}` });
}

