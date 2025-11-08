const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

//import Route files
const bootcamps = require("./routes/bootcamps");
const dashboard = require("./routes/dashboard");

// load env vars
dotenv.config({ path: './config/config.env' });  //env config

//connect to database
connectDB();


//initializind express app
const app = express();
    

//Dev logging middleware //NOTE: I had to trim cos process.env.NODE_ENV was returing an extra spaces behind the string
if((process.env.NODE_ENV).trim('') === 'development') {
    app.use(morgan('dev'));
}


// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.use('/api/v1/dashboard', dashboard);


const PORT = process.env.PORT || 5000 //we use process to access env vars
const server = app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);

    //Close server & exit process
    server.close(() => process.exit(1));
})
