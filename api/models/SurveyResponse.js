const mongoose = require('mongoose');
const SelectFrom = require('./SelectFrom');
const CheckAll = require('./CheckAll');
const TextInput = require('./TextInput');
const Field = require('./Field');
const Survey = require('./Survey');

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    survey: { type: mongoose.Schema.Types.ObjectId, ref: Survey },
    author: String,
    name: String,
    description: String,
    fields: [Field],
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date }
});

SurveySchema.path('fields').discriminator('SelectFrom', SelectFrom);
SurveySchema.path('fields').discriminator('CheckAll', CheckAll);
SurveySchema.path('fields').discriminator('TextInput', TextInput);

module.exports = mongoose.model('Survey', SurveySchema);