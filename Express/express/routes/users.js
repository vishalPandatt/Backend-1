const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  description: String,
  categories: {
    type: [String],
    default: []
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserModel', userSchema);