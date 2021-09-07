const express = require('express');
const router = require('./routes/api');
const app = express(); //set up express
require('dotenv').config();
const port = process.env.PORT || 4000;
//initzation of routes
app.use('/api', router);

//Listen for req
app.listen(port, () => {
  console.log('port', port);
  console.log('Muneeb bro');
});
