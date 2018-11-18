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

//default active status by end date in future
SurveySchema.pre('save', async function(next) {
  const survey = this;
  try {
    if (survey.isActive === undefined) {
      const currentTime = new Date();
      const startDate = new Date(survey.startDate);
      const endDate = new Date(survey.endDate);
      survey.isActive = endDate - startDate > 0 && endDate - currentTime > 0;
    }
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = mongoose.model('Survey', SurveySchema);
