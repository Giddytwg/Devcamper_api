const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middlewares/error')

//import Route files
const bootcamps = require("./routes/bootcamps");

// load env vars
dotenv.config({ path: './config/config.env' });  //env config

//connect to database
connectDB();

//initializind express app
const app = express();

//Body parser: parses the req body into JSON, so it can be used in express app
app.use(express.json());

//Dev logging middleware //NOTE: I had to trim cos process.env.NODE_ENV was returing an extra spaces behind the string
if((process.env.NODE_ENV).trim('') === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// using our custom middleware error handler 'all error get handed over to this middleware'
app.use(errorHandler);

const PORT = process.env.PORT || 5000 //we use process to access env vars
const server = app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);

    //Close server & exit process
    server.close(() => process.exit(1));
})
