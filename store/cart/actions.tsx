import ProductProps from "../../types/ProductProps"

import * as types from "./types"

export const addToCart = (item: types.ProductDetails) => {
    return {
        type: types.ADD_TO_CART,
        productDetails: item
    }
}

export const removeFromCart = (item: string) => {
    return {
        type: types.REMOVE_FROM_CART,
        productId: item
    }
}

