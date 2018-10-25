const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CheckAllSchema = new Schema({
    options: [String],
    expectedResponse: [String]
});

const CheckAll = mongoose.model('CheckAll', CheckAllSchema);

module.exports = { CheckAllSchema, CheckAll }
