const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validFieldTypes = [
  'TextInput',
  'YesNo',
  'Boolean',
  'CheckAll',
  'SelectFrom'
];

const FieldSchema = new Schema(
  {
    question: {
      type: String,
      required: [true, 'Field Required: question']
    }
  },
  { discriminatorKey: 'fieldType' }
);

FieldSchema.pre('save', async function(next) {
  const field = this;
  try {
    const isValid = validFieldTypes.indexOf(field.fieldType) !== -1;
    if (isValid) {
      next();
    } else {
      throw {
        message: 'fieldType did not match expected schema',
        success: false,
        expected: validFieldTypes
      };
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

const Field = mongoose.model('Field', FieldSchema);
module.exports = { FieldSchema, Field };
