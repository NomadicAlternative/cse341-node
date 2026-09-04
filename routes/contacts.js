// express.Router lets us define routes in a separate file
const express = require('express');
const router = express.Router();
// Import the Contact model so we can query MongoDB
const Contact = require('../models/Contact');

// GET /contacts -> returns ALL contacts from the collection
router.get('/', async (req, res) => {
  try {
    // .find({}) with an empty object = "give me every document"
    const contacts = await Contact.find({});
    // Send the full list as a JSON response
    res.status(200).json(contacts);
  } catch (err) {
    // Something went wrong with the database -> return a 500 error
    res.status(500).json({ message: err.message });
  }
});

// GET /contacts/:id -> returns ONE contact that matches the id in the URL
router.get('/:id', async (req, res) => {
  try {
    // req.params.id = the value that comes after "/contacts/" in the URL
    const { id } = req.params;
    // .findById() looks for a document whose _id matches
    const contact = await Contact.findById(id);
    if (!contact) {
      // No match found -> 404 (Not Found)
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Export the router so app.js can mount it
module.exports = router;