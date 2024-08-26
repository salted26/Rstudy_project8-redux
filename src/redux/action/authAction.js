function loginUser(searchKeyword) {
    return async (dispatch, getState) => {
        const url = `https://my-json-server.typicode.com/salted26/Rstudy_project8/products?q=${searchKeyword}`;
        const response = await fetch(url);
        const data = await response.json();
        dispatch({type: 'LOGIN_SUCCESS', payload: {data}});
    }
}

export const authAction={loginUser}