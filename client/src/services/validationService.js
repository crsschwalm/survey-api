export const validateSurveyForm = (form) => {
    const requiredFields = [form.name, form.description, form.endDate, form.fields]
    const areRequiredFieldsValid = requiredFields.every(isNotEmpty);
    const invalidOptions = form.fields.filter(isInvalidField)
    const isFieldOptionValid = invalidOptions.length === 0;
    return areRequiredFieldsValid && isFieldOptionValid;
};

export const validateSurveyResponses = (responses) => isNotEmpty(Object.values(responses))

const isNotEmpty = (something) => !!something && something.length !== 0;
const isInvalidField = ({ question, fieldType, options }) => !question || !fieldType || (fieldType !== 'TextInput' && Object.values(options).length === 0);