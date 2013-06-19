var mongoose = require('mongoose')
  , Schema   = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var protipSchema = new Schema({
  user:        String,     // Check spelling
  description: String,     // match regex for max 5 words + reasonable length
  content:     String,     // match regex for a protip's max length.
  comments:    [ObjectId], // connects to comment models
  createdAt:   Date
});

exports = module.exports = mongoose.model('Protip', protipSchema);
