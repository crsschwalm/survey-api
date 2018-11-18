const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YesNoSchema = new Schema({
  expectedResponse: Boolean
});

const YesNo = mongoose.model('YesNo', YesNoSchema);

module.exports = { YesNoSchema, YesNo };
