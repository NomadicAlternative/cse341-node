// Load the Mongoose library, which lets us talk to MongoDB using Models
const mongoose = require('mongoose');

// async function: it returns a Promise, so we can wait for the connection to finish
async function connectDB() {
  // mongoose.connect() actually establishes the connection to MongoDB
  // The connection string (URI) is read from the .env file, never hardcoded here
  return mongoose.connect(process.env.MONGODB_URI);
}

// Export the function so other files (like app.js) can import and call it
module.exports = connectDB;