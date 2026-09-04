// Import mongoose to create a Schema and a Model
const mongoose = require('mongoose');

// A Schema defines the STRUCTURE of each document in the collection
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  favoriteColor: { type: String, required: true },
  birthday: { type: Date, required: true }
});

// The Model is the "class" that knows how to read/write contacts in MongoDB
// mongoose.model('Contact') automatically connects to the "contacts" collection
module.exports = mongoose.model('Contact', contactSchema);