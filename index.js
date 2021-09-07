const express = require('express');
const app = express(); //set up express
require('dotenv').config();
const port = process.env.PORT || 4000;
//Listen for req
app.get('/', (req, res) => {
  console.log('Get');
  res.end();
});

app.listen(port, () => {
  console.log('port', port);
  console.log('Hello');
});
