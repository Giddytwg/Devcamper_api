const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI) //Mongoose.conncet, takes in URI with auth as arg
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
}

module.exports = connectDB;

/* 
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn
    }
    catch(error) {
    console.log(`error: ${error.message}`)    
    }
}
*/