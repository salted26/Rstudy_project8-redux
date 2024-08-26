function getProducts(searchKeyword) {
    return async (dispatch, getState) => {
        const url = `https://my-json-server.typicode.com/salted26/Rstudy_project8/products?q=${searchKeyword}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: {data}});
    }
}

export const productAction={getProducts}