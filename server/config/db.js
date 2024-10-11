const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        console.log("MongoDB URI:", process.env.MONGODB_URI); // Debugging line
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error); // Improved error logging
    }
};

module.exports = connectDB;
