const express = require('express');
const Ninja = require('../models/ninja');

const router = express.Router();
// get a list of ninjas from the de
router.get('/ninjas', (req, res) => {
  res.send({ type: 'GET' });
});
// add new in db
router.post('/ninjas', async (req, res) => {
  const ninja = await Ninja.create(req.body);
  res.send({ type: 'POST', ...ninja });
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
