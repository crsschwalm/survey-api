export const clearResponses = () => ({ type: 'CLEAR_RESPONSES' })
export const setResponse = (fieldId, response) => ({ type: 'SET_RESPONSE', payload: { fieldId, response } })
export const handleUserCheck = (index, key) => ({ type: 'HANDLE_USER_CHECK', payload: { index, key } })

export const fetchStarted = () => ({ type: 'FETCH_STARTED' })
export const fetchSuccess = (response) => ({ type: 'FETCH_SUCCESS', payload: { response } })
export const fetchError = (error) => ({ type: 'FETCH_ERROR', payload: { error } })

export const submitStarted = () => ({ type: 'SUBMIT_STARTED' })
export const submitSuccess = (response) => ({ type: 'SUBMIT_SUCCESS', payload: { response } })
export const submitError = (error) => ({ type: 'SUBMIT_ERROR', payload: { error } })

export const fetchSurvey = (id) =>
    async dispatch => {
        dispatch(fetchStarted());
        try {
            const response = await fetch(`/api/survey/to-take/${id}`);
            const body = await response.json();
            !!body && dispatch(fetchSuccess(body))
        } catch (error) {
            dispatch(fetchError(error))
        }
    }

export const submitResponse = () => async (dispatch, getState) => {
    dispatch(submitStarted());
    try {
        const response = await fetch('/api/response', {
            method: 'POST',
            body: JSON.stringify(
                {
                    surveyId: getState().takeSurvey._id,
                    responses: getState().takeSurvey.responses
                }
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status !== 200) { throw new Error('Save Survey Failed') }
        dispatch(submitSuccess(response));
    }
    catch (error) {
        dispatch(submitError(error));
    }
}