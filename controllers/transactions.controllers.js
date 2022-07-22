const express = require('express');
const transactions = express.Router();
const transactionsArray = require('../models.transactions.js');

// Get a list (or index) of all transactions (index)
transactions.get('/transactions', (req, res) => {
	res.send(transactionsArray);
});

// Get an individual view (show one transactions) (show)
transactions.get('/transactions/:id', (req, res) => {
	const { id } = req.params.id;
	res.send(transactionsArray[id]);
});

// Create a new transactions (create)
transactions.post('/transactions/new', (req, res) => {
	transactionsArray.push(req.body);
	res.send(transactionsArray[transactionsArray.length - 1]);
});

// Update a transactions (update)
transactions.put('/transactions/:id', (req, res) => {
	const { id } = req.params.id;
	const updatedTrans = req.body;
	transactionsArray[id] = updatedTrans;
	res.send(transactionsArray[id]);
});

// Delete a transactions (destroy)
transactions.delete('/transactions/:id', (req, res) => {
	const { id } = req.params.id;
	transactionsArray.splice(id, 1);
	res.send(transactionsArray);
});

module.exports = transactions;
