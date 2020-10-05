import ProductState from "../../types/states/AppState"
import { ADD_TO_CART, REMOVE_FROM_CART, CartTypes } from "./types"

import PRODUCTS from "../../data/dummy-data-products"

const initialState: ProductState = {
    products: PRODUCTS,
    cart: [],
    orders: [],
    myProducts: []
}

const productReducer = (state = initialState, action: CartTypes) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.product]
            }
        case REMOVE_FROM_CART:
            const { cart } = state
            const indexOfProduct = cart.indexOf(action.product)
            const newCart = [...state.cart].splice(indexOfProduct, 1)
            return {
                ...state,
                cart: newCart
            }
        default:
            return state
    }
}

export default productReducer
