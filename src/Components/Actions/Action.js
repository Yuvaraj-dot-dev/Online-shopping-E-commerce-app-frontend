export const addToCart = (item) =>{
    return {
        type : 'ADD_TO_CART',
        payload : item

    }
}

export const removeFromCart = (id) =>{
    return {
        type : 'REMOVE_FROM_CART',
        payload : id

    }
}

export const onSearch = (value) =>{
    return {
        type : 'ON_SEARCH' ,
        payload : value
    }
}

export const increment = (id) =>{
    return {
        type : 'INCREMENT',
        payload : id
    }
}

export const loginState = (value) => {
    return {
        type: 'LOGIN_STATE',
        payload: value
    }
}
