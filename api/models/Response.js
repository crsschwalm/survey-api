const mongoose = require('mongoose');
const { Survey } = require('./Survey');
const { Field } = require('./Field');

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    id: Schema.Types.ObjectId,
    //userRef: 
    // {
    //     type: Schema.Types.ObjectId,
    //     ref: User,
    //     required: true
    // },
    surveyRef: {
        type: Schema.Types.ObjectId,
        ref: Survey,
        required: true
    },

    responses: Schema.Types.Mixed
    // responses: [{
    //     fieldRef: {
    //         type: Schema.Types.ObjectId,
    //         ref: Field,
    //         required: true
    //     }, response: Schema.Types.Mixed
    // }],
});

module.exports = mongoose.model('Response', ResponseSchema);