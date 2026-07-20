const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase');

mongoose.Schema({
  username: String,
  password: String,
  description: String,
  categories:{
    type: array,
    default: []
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('User', userSchema);