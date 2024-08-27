// eslint-disable-next-line
function getProducts(searchKeyword) {
    return async (dispatch, getState) => {
        const url = `https://my-json-server.typicode.com/salted26/Rstudy_project8/products?q=${searchKeyword}`;
        const response = await fetch(url);
        const data = await response.json();
        dispatch({type: 'GET_PRODUCTLIST_SUCCESS', payload: {data}});
    }
}

function getProductDetail(id){
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/salted26/Rstudy_project8/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type: 'GET_PRODUCT_SUCCESS', payload: {data}});
    }
}
export const productAction
    ={getProducts, getProductDetail}