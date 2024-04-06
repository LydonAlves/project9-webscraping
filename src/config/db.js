const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to Database successfully')
  } catch (error) {
    console.log('Error connecting to database')
  }
}

module.exports = connectDB

//!another way to do it
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config()

// const MONGO_URI = process.env.MONGO_URI

// const connect = async () => {
//   try {
//     await mongoose.connect(MONGO_URI)
//     console.log('Server connected to DB')
//   } catch (error) {
//     console.log('Error connecting to DB', error)
//   }
// }

// module.exports = connect
