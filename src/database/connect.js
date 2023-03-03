const mongoose = require('mongoose');

const connectToDataBase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@traine.luyiuju.mongodb.net/?retryWrites=true&w=majority`)
        console.log('Database is connected.')
    } catch (error) {
        return console.log("Database connection Error: ", error)
    }
    
}

module.exports = connectToDataBase