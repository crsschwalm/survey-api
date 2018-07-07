const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FieldSchema = new Schema({ question: String },
    { discriminatorKey: 'fieldType', _id: false });


const Field = mongoose.model('Field', FieldSchema);
module.exports = { FieldSchema, Field }