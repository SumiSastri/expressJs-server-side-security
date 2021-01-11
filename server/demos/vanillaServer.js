// import library
const express = require('express');
// instantiate the express object and its methods
const app = express();
// set a port
const port = 3000;

// test a route app.get() method 2 args, first path, promise req/res call back returns send response
app.get('/', (req, res) => res.send('Hello World!'));

// app.listen() methid tajes 2 args the port and void function with port path
app.listen(port, () => console.log(`Vanilla server listening at http://localhost:${port}`));
