var mongoose = require('mongoose');

var userSchema = exports.userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email:    String
});


var commentSchema = exports.commentSchema = new mongoose.Schema({
  user:    ObjectId,
  parent:  ObjectId, // (points to the appropriate protip)
  content: String
});
