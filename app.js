// Load environment variables from the .env file into process.env
// MUST be the first line so MONGODB_URI is available everywhere
require('dotenv').config();

// Load the Express library to create our web server
const express = require('express');
// Import our own function that connects to MongoDB (db/connect.js)
const connectDB = require('./db/connect');
// Import the routes we defined in routes/contacts.js
const contactsRoutes = require('./routes/contacts');

// Create the Express application
const app = express();
// Middleware: automatically parse JSON in the request body into req.body
app.use(express.json());
// Use the port from the environment (Render) or default to 8080 locally
const port = process.env.PORT || 8080;

// Define a route: when someone visits "/", send back "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});
// Mount the contacts routes: every request starting with /contacts
// will be handled by routes/contacts.js
app.use('/contacts', contactsRoutes);

// start is an async function: we MUST connect to the DB before listening
const start = async () => {
  try {
    // Wait for MongoDB connection to finish (uses the URI from .env)
    await connectDB();
    // Only after the DB is connected, start listening for HTTP requests
    app.listen(port, () => {
      console.log(`Connected to DB. Running on port ${port}`);
    });
  } catch (err) {
    // If connecting to the DB fails, print the error instead of crashing silently
    console.log(err);
  }
};

// Run the start function when the app boots up
start();