const mongoose = require('mongoose');
const { SelectFromSchema } = require('./SelectFrom');
const { CheckAllSchema } = require('./CheckAll');
const { TextInputSchema } = require('./TextInput');
const { FieldSchema } = require('./Field');

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    id: Schema.Types.ObjectId,
    author: String,
    name: String,
    description: String,
    fields: [FieldSchema],
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date }
});

SurveySchema.path('fields').discriminator('SelectFrom', SelectFromSchema);
SurveySchema.path('fields').discriminator('CheckAll', CheckAllSchema);
SurveySchema.path('fields').discriminator('TextInput', TextInputSchema);

module.exports = mongoose.model('Survey', SurveySchema);