const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API for CSE 341 Web Services',
  },
   host: 'cse341-node-week1-9vs0.onrender.com',
   schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Generate swagger.json from the route files
swaggerAutogen(outputFile, endpointsFiles, doc);
