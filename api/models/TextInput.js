const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextInputSchema = new Schema({
    response: String,
    expectedResponse: String
});

const TextInput = mongoose.model('TextInput', TextInputSchema);

module.exports = { TextInput, TextInputSchema }