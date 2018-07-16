export const validateSurveyForm = (form) => {
    const isSurveyOptionValid = Object.values(form).every(isNotEmpty);
    const invalidOptions = form.fields.filter(isInvalidField)
    const isFieldOptionValid = invalidOptions.length === 0;
    return isSurveyOptionValid && isFieldOptionValid;
};

export const validateSurveyAnswers = (answers) => isNotEmpty(Object.values(answers))

const isNotEmpty = (something) => !!something && something.length !== 0;
const isInvalidField = ({ question, fieldType, options }) => !question || !fieldType || (fieldType !== 'TextInput' && Object.values(options).length === 0);