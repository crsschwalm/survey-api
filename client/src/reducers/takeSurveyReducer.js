import formatDate from '../services/formatDate';

const takeSurveyReducer = (state = emptyResponse(), action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_RESPONSE': {
            const { fieldId, response } = payload;
            const answers = state.answers;
            answers[fieldId] = response;
            return { ...state, answers: answers };
        }
        case 'UPDATE_USER_CHECK': {
            const { index, key } = payload;
            const isChecked = state.fields[index].options[key];
            state.fields[index].options[key] = !isChecked;
            return { ...state };
        }
        case 'CLEAR_RESPONSES': {
            return { ...state, ...emptyResponse() }
        }
        case 'FETCH_STARTED': {
            return { ...state, loading: true };
        }
        case 'FETCH_SUCCESS': {
            const { response } = payload;
            const startDate = formatDate.forHTML(response.startDate)
            const endDate = formatDate.forHTML(response.endDate)
            return { ...state, ...response, loading: false, startDate, endDate };
        }
        case 'FETCH_ERROR': {
            const { error } = payload;
            return { ...emptyResponse(), error: error, loading: false };
        }
        case 'SUBMIT_STARTED': {
            return { ...state, loading: true };
        }
        case 'SUBMIT_SUCCESS': {
            return { ...emptyResponse(), loading: false };
        }
        case 'SUBMIT_ERROR': {
            const { error } = payload;
            return { ...state, error: error, loading: false, };
        }
        default: {
            return state;
        }
    }
}

const emptyResponse = () => ({
    _id: undefined,
    name: '',
    description: '',
    author: 'cschwalm',
    startDate: formatDate.forHTML(),
    endDate: '',
    fields: [],
    answers: {},
    loading: false,
    error: null
});


export default takeSurveyReducer;