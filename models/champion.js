var mongoose = require('mongoose')
  , Schema   = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var championSchema = new Schema();

exports = module.exports = mongoose.model('Champion', championSchema)
