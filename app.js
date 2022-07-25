const express = require('express');
const app = express();
const cors = require('cors');
const transactions = require('./controllers/trasactionController.js');

app.use(express.json());

app.use(cors());

app.use('/transactions', transactions);

app.get('/', (req, res) => {
	res.send('Welcome to the backend!');
});

app.use('/*', (req, res) => {
	res.status(404).send('GET OUT!');
});

module.exports = app;
