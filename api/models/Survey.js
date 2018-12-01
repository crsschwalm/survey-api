const mongoose = require('mongoose');
const { FieldSchema } = require('./Field');
const { User } = require('./User');

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  author: {
    username: {
      type: String,
      required: [true, 'Field Required: author.username'],
      authorRef: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: [true, 'Field Required: author.authorRef']
      }
    }
  },
  name: {
    type: String,
    required: [true, 'Field Required: name']
  },
  description: {
    type: String,
    required: [true, 'Field Required: description']
  },
  fields: {
    type: [FieldSchema],
    required: [true, 'Field Required: fields']
  },
  startDate: { type: Date, default: Date.now },
  endDate: {
    type: Date,
    required: false
  },
  timeStamp: { type: Date, default: Date.now },
  isActive: {
    type: Boolean,
    default: true
  }
});

SurveySchema.path('fields').discriminator(
  'CheckAll',
  new Schema({
    type: [String],
    required: [true, 'Field Required: options']
  })
);
SurveySchema.path('fields').discriminator(
  'SelectFrom',
  new Schema({
    type: [String],
    required: [true, 'Field Required: options']
  })
);

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
