
// User declarations

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = new Schema({
  username: String,
  password: String,
  email:    String,
  protips:  [ObjectId],
  comments: [ObjectId]
});

// Creating and exporting our User model

exports = module.exports = mongoose.model('User', userSchema);
