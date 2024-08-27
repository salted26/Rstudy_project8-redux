
function login(username, password, authenticate) {
    return async (dispatch, getState) => {
        dispatch({type: 'LOGIN_SUCCESS', payload: {username, password, authenticate}});
    }
}

function logout(authenticate) {
    return async (dispatch, getState) => {
        dispatch({type: 'LOGOUT_SUCCESS', payload: {authenticate}});
    }
}

function getAuthenticate(authenticate) {
    return async (dispatch, getState) => {
        dispatch({type: 'AUTHENTICATE', payload: {authenticate}});
    }
}

export const authAction={login, logout, getAuthenticate}