import * as actionType from "./actionCartType"

const addToCar = (payload) => {
    return {
        type: actionType.ADD_TO_CART,
        payload
    }
}

const removeCart = (payload) => {
    return {
        type: actionType.REMOVE_CART,
        payload
    }
}

const updateQuantity = (payload) => {
    return {
        type: actionType.UPDATE_QUANTITY,
        payload
    }
}

const getCart = () => {
    return {
        type: actionType.GET_CART,
    }
}

export { addToCar, removeCart, updateQuantity, getCart }