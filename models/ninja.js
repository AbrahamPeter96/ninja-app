const mongoose = require('mongoose');
const GeoSchema = require('./geo');
const Schema = mongoose.Schema;

// creating schema

const NinjaSchema = new Schema({
  name: { type: String, required: [true, 'Name field is required'] },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  geometry: GeoSchema
});
const fileNameInDb = 'ninja';

const Ninja = mongoose.model(fileNameInDb, NinjaSchema);

module.exports = Ninja;
