const authReducer = (state = { email: '', password: '' }, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SUBMIT_LOGIN': {
            return { ...state, email: payload.email };
        }
        default: {
            return state;
        }
    }
}

export default authReducer;