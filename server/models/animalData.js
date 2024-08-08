const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: String,
    species: String,
    habitat: String,
    diet: String,
    lifespan: Number,
    status: String,
    description: String,
    imageUrl: String
});

module.exports = mongoose.model('Animal', animalSchema);