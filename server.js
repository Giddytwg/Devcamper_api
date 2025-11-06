const express = require('express');
const dotenv = require("dotenv");


// load env vars
dotenv.config({ path: './config/config.env' });  //env config

const app = express() //initializind express app

const PORT = process.env.PORT || 5000 //we use process to access env vars
console.log(process.env.NODE_ENV)


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
