const express = require('express');

const router = express.Router();
// get a list of ninjas from the de
router.get('/ninjas', (req, res) => {
  res.send({ type: 'GET' });
});
// add new in db
router.post('/ninjas', (req, res) => {
  console.log('Request.Body', req.body);
  res.send({ type: 'POST' });
});
// Update in db
router.put('/ninjas/:id', (req, res) => {
  res.send({ type: 'PUT' });
});
// delete in db
router.delete('/ninjas/:id', (req, res) => {
  res.send({ type: 'DEL' });
});

module.exports = router;
