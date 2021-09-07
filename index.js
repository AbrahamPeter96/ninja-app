const express = require('express');
const app = express(); //set up express
require('dotenv').config();
const port = process.env.PORT || 4000;
//Listen for req
app.get('/api', (req, res) => {
  console.log('Get');
  res.send({ name: 'Abraham' });
});

app.listen(port, () => {
  console.log('port', port);
  console.log('Hello');
});
