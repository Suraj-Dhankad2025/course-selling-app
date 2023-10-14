const mongoose = require("mongoose");
const Course = require("./course");
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: `${Course}` }]
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;