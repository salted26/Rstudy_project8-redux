let initialState = {

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS' :
            return  {
                ...state,
                login : {username: action.payload.username, password: action.payload.password}
            }
    }
}