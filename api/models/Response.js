const mongoose = require('mongoose');
const { Survey } = require('./Survey');
const { Field } = require('./Field');

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    surveyRef: {
        type: Schema.Types.ObjectId,
        ref: Survey,
        required: true
    },
    responses: [{
        fieldRef: {
            type: Schema.Types.ObjectId,
            ref: Field,
            required: true
        }, response: [String]
        //input: [String]
        //selection: [ref to label id]
    }],
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = { Response, ResponseSchema }