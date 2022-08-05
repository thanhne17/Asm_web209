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

export {addToCar, removeCart}