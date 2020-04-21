const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentsSchema = new Schema({
  date: String,
  title: String,
  body: String
});

module.exports = mongoose.model('Contents', ContentsSchema);