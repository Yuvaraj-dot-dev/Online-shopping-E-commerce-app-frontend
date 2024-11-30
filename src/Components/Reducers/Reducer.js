const initialState = {
    cartData: [],
    quantity: 1,
    login : [],
    search: "",
    userData: []
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
                login: [...state.login,  {...action.payload} ]
           }
        case "USER_DATA" : 
            return {
                ...state,
                userData: [...state.userData,  ...action.payload ]
            }
                default:
                    return state;

                }
            }



export default cartReducer;