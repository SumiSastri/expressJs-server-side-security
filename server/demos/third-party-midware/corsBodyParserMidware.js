const express = require('express');
const app = express();
const port = 3000;
// import and instantiate the third party middleware
const cors = require('cors');
const bodyParser = require('body-parser');

// use their methods with the express app.use() method
// the order is important
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('home route working');
});

app.listen(port, () => console.log(`Vanilla server listening at http://localhost:${port}`));
