const express = require('express');
const app = express();
const cors = require('cors');
const transactions = require('./controllers.transacations.js');

app.use(express.json());

app.use('/transactions',transactionsArray)
