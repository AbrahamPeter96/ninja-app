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
router.delete('/ninjas/:someId', async (req, res, next) => {
  try {
    const delNinja = await Ninja.findByIdAndRemove({ _id: req.params.someId });
    console.log('delNinja', delNinja);
    res.send({ type: 'DEL' });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
