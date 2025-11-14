const Bootcamp = require('../models/Bootcamps');
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middlewares/async');

// This are the function that get ran wher router in sever js get called for each route

// @desc Get all bootcamps
// @route GET api/v1/bootcamps
//@access Public
exports.getAllBootcamps = asyncHandler (async(req, res, next) => {
        const bootcamps = await Bootcamp.find();
        
        res
            .status(200)
            .json({ success: true, count: d=bootcamps.length, data: bootcamps })
    
});

// @desc Get a single bootcamps
// @route GET api/v1/bootcamps/:id
// @access Public
exports.getBootcamp =  asyncHandler( async (req, res, next) => {

        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp){
           return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
        }

        res
            .status(200)
            .json({ success: true, data: bootcamp });
});

// @desc Create new bootcamps
// @route POST api/v1/bootcamps/:id
// @access Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.create(req.body);

        res
            .status(201)
            .json({
        success: true,
        data: bootcamp
    })
});

// @desc update bootcamps
// @route PUT api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp =asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //forces mongoDB to return new update object, mongoDB returns old object by default
        runValidators: true   //runs validator on schema since mongoDB doesnt automatcally run validator on updated objects i.e it will check if required or enum on updated object
        });

        if(!bootcamp) {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
    }
        res
            .status(201)
            .json({ success: true, data: bootcamp, msg:`Update bootcamp with id: ${req.params.id}` });
})


// @desc delete bootcamps
// @route DELETE api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {

        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if(!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
        }

        res
            .status(200)
            .json({ success: true, data: bootcamp, message: `Bootcamp with id: ${req.params.id} deleted`});
});

