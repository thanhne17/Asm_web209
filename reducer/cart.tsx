import * as actionType from "../action/actionCartType"
import { addCart, getCarts, removeCart, updateQuality } from "../api/cart"

var initState = {
    cart: [],
    price: "",
    quantity: ""
}

const getCart = async () => {
    if (typeof window !== 'undefined') {
        const data = await getCarts();
        const id = JSON.parse(localStorage.getItem("user"))?._id
        const cart = data.filter(item => item.uId == id);

        const totalPrice = cart.reduce((accument, currentVallue) => {
            const total = accument + Number.parseInt(currentVallue.price) * Number.parseInt(currentVallue.quantity)
            return total
        }, 0)
        initState.cart = cart
        initState.price = totalPrice
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
                            quantity: cartLength[0].quantity + action.payload.quantity,
                            name: action.payload.name,
                            price: action.payload.price,
                            image: action.payload.image
                        })
                    }
                    else {
                        addCart(action.payload)
                            .then((res) => {
                                state.cart = [...state.cart, res]
                            })
                    }
                }
                else {
                    addCart(action.payload)
                        .then((res) => {
                            state.cart = [...state.cart, res]
                        })
                }
            }
            checkCart()
            break;

        case actionType.REMOVE_CART:
            const removeCarts = async () => {
                if (window.confirm("Xoa??")) {
                    await removeCart(action.payload.itemId)
                        .then(() => {
                            var newCart = state.cart.filter((item) => item._id !== action.payload.itemId)
                            return state = {
                                ...state,
                                cart: newCart
                            }
                        })
                }
                return state
            }
            removeCarts()

            return state

        case actionType.GET_CART:
            const GetCarts = async () => {
                return await getCarts()
            }
            const cart = GetCarts()
            const newCart = [...state.cart, cart];

            return {
                ...state,
                cart: newCart
            }

        case actionType.UPDATE_QUANTITY:
            // const removeCarts = async () => {
            //     if (window.confirm("Xoa??")) {
            //         await removeCart(action.payload)
            //     }
            // }
            // removeCarts()
            break;

        default:
            return state
    }
    return state
}

export default reducer