import * as actionType from "../action/actionCartType"
import { addCart, getCarts, removeCart, updateQuality } from "../api/cart"

const initState = {
    cart: []
}

const getCart = async () => {
    if (typeof window !== 'undefined') {
        const data = await getCarts();
        const id = JSON.parse(localStorage.getItem("user"))._id
        const cart = data.filter(item => item.uId == id);
        initState.cart = cart
        // Perform localStorage action
    }
}
getCart()

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const checkCart = async () => {
                const data = await getCarts();
                if (data) {
                    const cartUser = data.filter(item => item.uId == JSON.parse(localStorage.getItem("user"))._id);
                    const cartLength = cartUser.filter(item => item.idProduct == action.payload.idProduct)
                    if (cartLength.length >= 1) {
                        updateQuality(cartLength[0]._id, {
                            idProduct: action.payload.idProduct,
                            uId: JSON.parse(localStorage.getItem("user"))._id,
                            quantity: cartLength[0].quantity + 1,
                            name: action.payload.name,
                            price: action.payload.price,
                            image: action.payload.image
                        })
                    }
                    else {
                        addCart(action.payload)
                    }
                }
                else {
                    addCart(action.payload)
                }
            }
            checkCart()
            break;

        case actionType.REMOVE_CART:
            const removeCarts = async () => {
                if (window.confirm("Xoa??")) {
                    const result = await removeCart(action.payload)
                }
            }
            removeCarts()
            break;

        default:
            break;
    }
    return state
}

export default reducer