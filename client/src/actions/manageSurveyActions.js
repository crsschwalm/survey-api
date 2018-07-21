export const addField = (fieldType) => ({ type: 'ADD_FIELD', payload: { fieldType } })
export const removeField = (fieldIndex) => ({ type: 'REMOVE_FIELD', payload: { fieldIndex } })
export const addOption = (index, label) => ({ type: 'ADD_OPTION', payload: { index, label } })
export const removeOption = (index, label) => ({ type: 'REMOVE_OPTION', payload: { index, label } })
export const setQuestion = (index, question) => ({ type: 'SET_QUESTION', payload: { index, question } })
export const setExpectedText = (index, response) => ({ type: 'SET_EXPECTED_TEXT', payload: { index, response } })
export const setExpectedOptions = (index, key) => ({ type: 'SET_EXPECTED_OPTION', payload: { index, key } })
export const setName = (input) => ({ type: 'SET_NAME', payload: { input } })
export const setDescription = (input) => ({ type: 'SET_DESCRIPTION', payload: { input } })
export const setStartDate = (input) => ({ type: 'SET_START_DATE', payload: { input } })
export const setEndDate = (input) => ({ type: 'SET_END_DATE', payload: { input } })
export const clearSurvey = () => ({ type: 'CLEAR_SURVEY' })

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
        try {
            const response = await fetch(`/api/survey/${id}`);
            const body = await response.json();
            !!body && dispatch(fetchSuccess(body))
        } catch (error) {
            dispatch(fetchError(error))
        }
    }


export const deleteSurvey = () => async (dispatch, getState) => {
    dispatch(deleteStarted());
    try {
        const response = await fetch(`/api/survey/delete/${getState().manageSurvey._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status !== 200) { throw new Error('Delete Survey Failed') }
        dispatch(deleteSuccess())
    } catch (error) {
        dispatch(deleteError())
    }

}


export const createSurvey = () => async (dispatch, getState) => {
    dispatch(createStarted());
    try {
        const response = await fetch('/api/survey/save', {
            method: 'POST',
            body: JSON.stringify(getState().manageSurvey),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status !== 200) { throw new Error('Save Survey Failed') }
        dispatch(createSuccess(response));
    }
    catch (error) {
        dispatch(createError(error));
    }
}


export const updateSurvey = () => async (dispatch, getState) => {
    dispatch(updateStarted());
    try {
        const response = await fetch(`/api/survey/update/${getState().manageSurvey._id}`, {
            method: 'PUT',
            body: JSON.stringify(getState().manageSurvey),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status !== 200) { throw new Error('Update Survey Failed') }
        dispatch(updateSuccess())
    } catch (error) {
        dispatch(updateError(error))
    }
}
