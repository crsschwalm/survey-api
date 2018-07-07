const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FieldSchema = new Schema({ question: String },
    { discriminatorKey: 'fieldType', _id: false });


const Field = mongoose.model('Field', FieldSchema);
module.exports = { FieldSchema, Field }

// const mongoose = require('mongoose');
// const SelectFrom = require('./SelectFrom');
// const CheckAll = require('./CheckAll');
// const TextInput = require('./TextInput');
// const Schema = mongoose.Schema;

// const options = { discriminatorKey: 'fieldType' };

// const fieldSchema = new Schema({ question: String }, options);
// const Field = mongoose.model('Field', fieldSchema);

// const SelectFromField = Field.discriminator('SelectFrom',
//     new mongoose.Schema({
//         options: [{ label: String }],
//         response: { label: String },
//         expectedResponse: { label: String }
//     }, options));

// const TextInputField = Field.discriminator('TextInput',
//     new mongoose.Schema({
//         response: { label: String },
//         expectedResponse: { label: String }
//     }, options));

// const CheckAllField = Field.discriminator('CheckAll',
//     new mongoose.Schema({
//         response: [{ label: String }],
//         options: [{ label: String }],
//         expectedResponse: [{ label: String }]
//     }, options));

// module.exports = mongoose.model('Field', fieldSchema);