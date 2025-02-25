const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: {type: String,  default: 'unknown'}, 
  catchphrase: String,
  image: String
})

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;