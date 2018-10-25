const mongoose = require('mongoose');
const { SelectFromSchema } = require('./SelectFrom');
const { CheckAllSchema } = require('./CheckAll');
const { TextInputSchema } = require('./TextInput');
const { FieldSchema } = require('./Field');
const { User } = require('./User');

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    authorRef: {
        type: Schema.Types.ObjectId,
        ref: User
    },
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