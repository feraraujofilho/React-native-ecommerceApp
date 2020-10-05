import ProductProps from "../../types/ProductProps"

import * as types from "./types"

export const addToCart = (item: ProductProps) => {
    return {
        type: types.ADD_TO_CART,
        product: item
    }
}

export const removeFromCart = (item: string) => {
    return {
        type: types.REMOVE_FROM_CART,
        product: item
    }
}

