const mongoose = require('mongoose');
const { SelectFromSchema } = require('./SelectFrom');
const { CheckAllSchema } = require('./CheckAll');
const { TextInputSchema } = require('./TextInput');
const { YesNoSchema } = require('./YesNo');
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
  endDate: { type: Date },
  timeStamp: { type: Date, default: Date.now },
  isActive: Boolean
});

SurveySchema.path('fields').discriminator('SelectFrom', SelectFromSchema);
SurveySchema.path('fields').discriminator('CheckAll', CheckAllSchema);
SurveySchema.path('fields').discriminator('TextInput', TextInputSchema);
SurveySchema.path('fields').discriminator('YesNo', YesNoSchema);

module.exports = mongoose.model('Survey', SurveySchema);
