// This file contains all the types of request for each route and data/function to get returned or call

const express = require("express");

const { 
    getAllBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamps')

const router = express.Router();

// 
router.route('/')
    .get(getAllBootcamps)
    .post(createBootcamp);
router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);

// Eport router
module.exports = router;