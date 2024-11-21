const initialState = {
    cartData: [],
    quantity: 1,
    signup : [],
    search: ""
}


const cartReducer = (state = initialState, action) => {
    console.log(state.search)
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, { ...action.payload }]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartData: state.cartData.filter((item) => item.id !== action.payload)
            }
        case "INCREMENT":
            return {
                ...state,
                quantity: state.quantity, ...action.payload + 1
            }
        case "ON_SEARCH" :
            return {
                ...state,
                search: state.search + action.payload
           }
        case "LOGIN_STATE" :
            return {
                ...state,
                signup: [...state.signup,  {...action.payload} ]
           }
            case "LOGOUT":
                default:
                    return state;

                }
            }



export default cartReducer;