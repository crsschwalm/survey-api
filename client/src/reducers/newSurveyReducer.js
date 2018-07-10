const generateField = (fieldType) => ({ fieldType: fieldType, question: '', options: {}, expectedResponse: '' })

const newSurveyReducer = (state = { fields: [], options: {} }, action) => {
    switch (action.type) {
        case 'ADD_FIELD': {
            const oldFields = state.fields;
            oldFields.push(generateField(action.payload));
            return { ...state, fields: oldFields }
        }
        case 'REMOVE_FIELD': {
            const fields = state.fields.filter((field, index) => action.payload !== index)
            return { ...state, fields: fields }
        }
        case 'SUBMIT_NEW_SURVEY': {
            console.log(state)
            //alert('woohoo survey should be saved')
            return { ...state }
        }
        case 'UPDATE_FIELD_QUESTION': {
            const { index, question } = action.payload;
            state.fields[index].question = question;
            return { ...state }
        }
        case 'ADD_OPTION': {
            const { index, label } = action.payload
            state.fields[index].options[label] = false;
            return { ...state }
        }
        case 'REMOVE_OPTION': {
            const { index, label } = action.payload
            delete state.fields[index].options[label]
            return { ...state }
        }
        case 'EXPECTED_TEXT_RESPONSE': {
            const { index, response } = action.payload
            state.fields[index].expectedResponse = response
            return { ...state }
        }
        case 'EXPECTED_OPTION_RESPONSE': {
            const { index, label } = action.payload
            const isExpected = state.fields[index].options[label]
            state.fields[index].options[label] = !isExpected;
            return { ...state }
        }
    }
    return state;
}

export default newSurveyReducer;