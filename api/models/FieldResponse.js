const mongoose = require('mongoose');
const { Field } = require('./Field')
const Schema = mongoose.Schema;

const FieldResponseSchema = new Schema({
    fieldRef: {
        type: Schema.Types.ObjectId,
        ref: Field,
        required: true
    },
    response: [String]
});

const FieldResponse = mongoose.model('FieldResponse', FieldResponseSchema);
module.exports = { FieldResponse, FieldResponseSchema }