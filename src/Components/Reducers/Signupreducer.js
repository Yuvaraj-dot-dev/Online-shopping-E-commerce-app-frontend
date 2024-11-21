const initialState = {
    login: false
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, { ...action.payload }]
            }
        case "LOGIN_STATE" : 
        return {
           ...state,
        }
        default:
            return state;

    }
}



export default cartReducer;