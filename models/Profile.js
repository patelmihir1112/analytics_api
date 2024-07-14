// backend/models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  profileImage: String,
  age: Number,
  gender: String,
  hobbies: String,
  country: String,
  state: String,
  city: String,
});

module.exports = mongoose.model('Profile', profileSchema);