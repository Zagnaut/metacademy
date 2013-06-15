
// Module declarations

var mongoose = require('mongoose')
  , Schema   = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var commentSchema = new Schema({
  user:      ObjectId,
  parent:    ObjectId,
  children:  [ObjectId],
  content:   String,
  votes:     Number,
  createdAt: Date
})

// Creating and exporting our Comment model

exports = module.exports = mongoose.model('Comment', commentSchema);
