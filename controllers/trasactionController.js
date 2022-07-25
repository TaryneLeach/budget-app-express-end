const express = require('express');
const transactions = express.Router();
const transactionsArray = require('../models/transactions.js');

// Get a list (or index) of all transactions (index)
transactions.get('/', (req, res) => {
	res.send(transactionsArray);
});

// Get an individual view (show one transaction) (show)
transactions.get('/:id', (req, res) => {
	let { id } = req.params;
	res.json(transactionsArray[id])
});

// Create a new transactions (create)
transactions.post('/', (req, res) => {
	transactionsArray.push(req.body);
	res.send(transactionsArray[transactionsArray.length - 1]);
});

// Update a transactions (update)
transactions.put('/:id', (req, res) => {
	let { id } = req.params;
	const updatedTrans = req.body;
	transactionsArray[id] = updatedTrans;
	res.send(transactionsArray[id]);
});

// Delete a transactions (destroy)
transactions.delete('/:id', (req, res) => {
	let { id } = req.params;
	transactionsArray.splice(id, 1);
	res.send(transactionsArray);
});

module.exports = transactions;
