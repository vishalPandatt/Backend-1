const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase');

const userSchema = mongoose.Schema({
  user: String,
  email: String,
  name: String,
  age: Number
});

module.exports = mongoose.model("user", userSchema);