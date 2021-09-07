const express = require('express');
const Ninja = require('../models/ninja');

const router = express.Router();
// get a list of ninjas from the de
router.get('/ninjas', (req, res) => {
  res.send({ type: 'GET' });
});
// add new in db
router.post('/ninjas', async (req, res, next) => {
  try {
    const ninja = await Ninja.create(req.body);
    res.send({ type: 'POST', ...ninja });
  } catch (e) {
    next(e);
  }
});
// Update in db
router.put('/ninjas/:id', (req, res) => {
  res.send({ type: 'PUT' });
});
// delete in db
router.delete('/ninjas/:someId', (req, res) => {
  console.log('delete', req.params.someId);
  res.send({ type: 'DEL' });
});

module.exports = router;
