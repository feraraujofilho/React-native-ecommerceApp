import ProductProps from "../../types/ProductProps"

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export interface addToCart {
    type: typeof ADD_TO_CART
    productId: string
}

export interface removeFromCart {
    type: typeof REMOVE_FROM_CART
    productId: string
}

export type CartTypes = addToCart | removeFromCart