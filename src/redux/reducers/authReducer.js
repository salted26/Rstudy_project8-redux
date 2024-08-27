let initialState = {
    login: {},
    logout: {},
    username: '',
    password: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS' :
            return  {
                ...state,
                login : {
                    username: action.payload.username,
                    password: action.payload.password,
                    authenticate: true
                }
            }
        case 'LOGOUT_SUCCESS' :
            console.log(action.payload)
            return {
                ...state,
                logout : {
                    authenticate: false
                }
            }
        case 'AUTHENTICATE' :
            return {
                ...state,
                authenticate: action.payload.authenticate
            }
        default : return {...state}
    }
}

export default authReducer;