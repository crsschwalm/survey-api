const mongoose = require('mongoose');
const { Survey } = require('./Survey');
const { User } = require('./User');
const { FieldResponseSchema } = require('./FieldResponse');

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    userRef: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    surveyRef: {
        type: Schema.Types.ObjectId,
        ref: Survey,
        required: true
    },
    fieldResponses: [FieldResponseSchema],
    timeStamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Response', ResponseSchema);