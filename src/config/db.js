const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database has been connected');
        
    } catch (error) {
        throw new Error('There has been a problem trying to connect with database')
    }
}

module.exports = dbConnection