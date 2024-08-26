let initialState = {
    productList: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS' :
            return {
                ...state, productList: action.payload.data
            }
        default : return {...state}
    }
}

export default productReducer;