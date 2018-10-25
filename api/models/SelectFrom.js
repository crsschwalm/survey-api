const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SelectFromSchema = new Schema({
    options: [String],
    expectedResponse: String
});

const SelectFrom = mongoose.model('SelectFrom', SelectFromSchema);
module.exports = { SelectFrom, SelectFromSchema }