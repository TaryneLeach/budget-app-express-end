const express = require('express')
const transaction = express.Router()
const transactionArray = require('../models.transactions.js')


// Get a list (or index) of all transactions
transaction.get('/transactions', (req, res) => {
res.send(transactionArray)
})