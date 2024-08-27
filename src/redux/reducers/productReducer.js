let initialState = {
    productList: [],
    product : [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTLIST_SUCCESS' :
            return {
                ...state, productList: action.payload.data
            }
        case 'GET_PRODUCT_SUCCESS' :
            return {
                ...state,
                    product : action.payload.data
            }
        default : return {...state}
    }
}

export default productReducer;