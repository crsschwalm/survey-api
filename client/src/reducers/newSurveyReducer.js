const generateField = (fieldType) => ({ fieldType: fieldType, question: '', options: {}, expectedResponse: '' })

const newSurveyReducer = (state = { name: '', description: '', startDate: '', endDate: '', fields: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_FIELD': {
            const oldFields = state.fields;
            oldFields.push(generateField(payload.fieldType));
            return { ...state, fields: oldFields };
        }
        case 'REMOVE_FIELD': {
            const fields = state.fields.filter((field, index) => payload.fieldIndex !== index);
            return { ...state, fields: fields };
        }
        case 'ADD_OPTION': {
            const { index, label } = payload;
            state.fields[index].options[label] = false;
            return { ...state }
        }
        case 'REMOVE_OPTION': {
            const { index, label } = payload;
            delete state.fields[index].options[label];
            return { ...state };
        }
        case 'SUBMIT': {
            console.log(state);
            alert('woohoo survey should be saved \n ' + state);
            return { ...state };
        }
        case 'CHANGE_QUESTION': {
            const { index, question } = payload;
            state.fields[index].question = question;
            return { ...state };
        }
        case 'CHANGE_TEXT_RESPONSE': {
            const { index, response } = payload;
            state.fields[index].expectedResponse = response;
            return { ...state };
        }
        case 'CHANGE_OPTION_RESPONSE': {
            const { index, label } = payload;
            const isExpected = state.fields[index].options[label];
            state.fields[index].options[label] = !isExpected;
            return { ...state };
        }
        case 'CHANGE_NAME': {
            const { input } = payload;
            state.name = input;
            return { ...state };
        }
        case 'CHANGE_DESCRIPTION': {
            const { input } = payload;
            state.description = input;
            return { ...state };
        }
        case 'CHANGE_START_DATE': {
            const { input } = payload;
            state.startDate = input;
            return { ...state };
        }
        case 'CHANGE_END_DATE': {
            const { input } = payload;
            state.endDate = input;
            return { ...state };
        }
    }
    return state;
}

export default newSurveyReducer;