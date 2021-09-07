const express = require('express');
const router = require('./routes/api');
const bodyParser = require('body-parser');
const app = express(); //set up express
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 4000;
const dbName = 'ninjago';
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
mongoose.Promise = global.Promise;
// Helps in parsing data of input requests i.e req.body
app.use(bodyParser.json());
//initzation of routes
app.use('/api', router);
app.use((err, req, res, next) => {
  res.send({ error: err.message });
});
//Listen for req
app.listen(port, () => {
  console.log('port', port);
  console.log('Muneeb bro');
});
