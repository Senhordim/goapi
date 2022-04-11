const mongoose = require('mongoose');

const PersonModel = mongoose.model('Person', {
    name: String,
    salary: Number,
    approved: Boolean,
});

module.exports = PersonModel;