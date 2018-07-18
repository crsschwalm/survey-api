export const addField = (fieldType) => ({ type: 'ADD_FIELD', payload: { fieldType } })
export const removeField = (fieldIndex) => ({ type: 'REMOVE_FIELD', payload: { fieldIndex } })
export const addOption = (index, label) => ({ type: 'ADD_OPTION', payload: { index, label } })
export const removeOption = (index, label) => ({ type: 'REMOVE_OPTION', payload: { index, label } })
export const setQuestion = (index, question) => ({ type: 'CHANGE_QUESTION', payload: { index, question } })
export const setExpectedText = (index, response) => ({ type: 'CHANGE_TEXT_RESPONSE', payload: { index, response } })
export const setExpectedOptions = (index, key) => ({ type: 'CHANGE_OPTION_RESPONSE', payload: { index, key } })
export const updateName = (input) => ({ type: 'CHANGE_NAME', payload: { input } })
export const updateDescription = (input) => ({ type: 'CHANGE_DESCRIPTION', payload: { input } })
export const updateStartDate = (input) => ({ type: 'CHANGE_START_DATE', payload: { input } })
export const updateEndDate = (input) => ({ type: 'CHANGE_END_DATE', payload: { input } })
export const clearForm = () => ({ type: 'CLEAR_SURVEY' })

export const fetchStarted = () => ({ type: 'FETCH_STARTED' })
export const fetchSuccess = (response) => ({ type: 'FETCH_SUCCESS', payload: { response } })
export const fetchError = (error) => ({ type: 'FETCH_ERROR', payload: { error } })

export const createStarted = () => ({ type: 'CREATE_STARTED' })
export const createSuccess = (response) => ({ type: 'CREATE_SUCCESS', payload: { response } })
export const createError = (error) => ({ type: 'CREATE_ERROR', payload: { error } })

export const updateStarted = () => ({ type: 'UPDATE_STARTED' })
export const updateSuccess = (response) => ({ type: 'UPDATE_SUCCESS', payload: { response } })
export const updateError = (error) => ({ type: 'UPDATE_ERROR', payload: { error } })

export const deleteStarted = () => ({ type: 'DELETE_STARTED' })
export const deleteSuccess = (response) => ({ type: 'DELETE_SUCCESS', payload: { response } })
export const deleteError = (error) => ({ type: 'DELETE_ERROR', payload: { error } })

export const fetchSurvey = (id) =>
    async dispatch => {
        dispatch(fetchStarted());
        const response = await fetch(`/api/survey/${id}`);
        const body = await response.json();
        return !!body ? dispatch(fetchSuccess(body)) : dispatch(fetchError(response));
    }


export const deleteSurvey = () => async (dispatch, getState) => {
    dispatch(deleteStarted());
    const response = await fetch(`/api/survey/delete/${getState().manageSurvey._id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.status === 200 ? dispatch(deleteSuccess()) : dispatch(deleteError());
}


export const createSurvey = () => async (dispatch, getState) => {
    dispatch(createStarted());
    const response = await fetch('/api/survey/save', {
        method: 'POST',
        body: JSON.stringify(getState().manageSurvey),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.status === 200 ? dispatch(createStarted()) : dispatch(createStarted());;
}


export const updateSurvey = () => async (dispatch, getState) => {
    dispatch(updateStarted());
    const response = await fetch(`/api/survey/update/${getState().manageSurvey._id}`, {
        method: 'PUT',
        body: JSON.stringify(getState().manageSurvey),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.status === 200 ? dispatch(updateStarted()) : dispatch(updateStarted());;
}
