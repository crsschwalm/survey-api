const mongoose = require('mongoose');
const { Survey } = require('./Survey');
const { User } = require('./User');
const { FieldResponseSchema } = require('./FieldResponse');

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  surveyTaker: { type: String, default: 'Anonymous' },
  surveyRef: {
    type: Schema.Types.ObjectId,
    ref: Survey,
    required: [true, 'Field Required: surveyRef']
  },
  fieldResponses: {
    type: [FieldResponseSchema],
    required: [true, 'Field Required: fieldResponses']
  },
  timeStamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Response', ResponseSchema);
