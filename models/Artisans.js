const mongoose = require('mongoose');

const ArtisanSchema = new mongoose.Schema({
  name: String,
  skill: String,
  location: String,
  rating: Number
}, { timestamps: true });

module.exports = mongoose.model('Artisan', ArtisanSchema);