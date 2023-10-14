const mongoose = require("mongoose");
const Course = require("./course");
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: `${Course}` }]
});
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
