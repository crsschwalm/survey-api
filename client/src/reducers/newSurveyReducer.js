const newSurveyReducer = (state = { fields: [] }, action) => {
    switch (action.type) {
        case 'ADD_FIELD': {
            const fields = state.fields;
            fields.push(action.payload);
            return { ...state, fields: fields }
        }
    }
    return state;
}

export default newSurveyReducer;