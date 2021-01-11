const express = require('express');
const app = express();
const port = 3000;

// app.use() method takes the middleware as its argument
// to use static files
app.use(express.static('public'));
// to change data to json
app.use(express.json());
// version of the stringify option
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

// the error object is baked into the express object
app.get('/', (req, res) => {
	throw new Error();
	res.json(data);
});
// it is also baked into the middleware to catch error before it hits server
app.use((err, req, res, next) => {
	// open console to see the 404 error
	console.error(err.stack);
	res.status().send(`CHECK ERROR STACK: ${err.stack}`);
});

app.listen(port, () => console.log(`Vanilla server listening at http://localhost:${port}`));
