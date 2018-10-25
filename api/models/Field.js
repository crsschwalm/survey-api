const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FieldSchema = new Schema({
    question: {
        type: String,
        required: true,
    }
},
    { discriminatorKey: 'fieldType' });


const Field = mongoose.model('Field', FieldSchema);
module.exports = { FieldSchema, Field }