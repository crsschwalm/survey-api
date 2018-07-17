const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SelectFromSchema = new Schema({
    options: Schema.Types.Mixed
});

const SelectFrom = mongoose.model('SelectFrom', SelectFromSchema);
module.exports = { SelectFrom, SelectFromSchema }