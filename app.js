// Description: This is a simple Express.js application that listens on a specified port and responds with "Hello World" when the root URL is accessed.
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});