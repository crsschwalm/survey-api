const authReducer = (state = { name: '', username: '', loggedIn: false }, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'LOGIN': {
            return {
                ...state,
                loggedIn: true,
                username: payload.username
            };
        }
        case 'REGISTER': {
            return {
                ...state,
                loggedIn: true,
                name: payload.name,
                username: payload.username
            };
        }
        default: {
            return state;
        }
    }
}

export default authReducer;