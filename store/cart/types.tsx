import CartItemInterface from '../../types/CartItemInterface'
import ProductProps from '../../types/ProductProps'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'


export interface addToCart {
	type: typeof ADD_TO_CART
	productDetails: CartItemInterface
}

export interface removeFromCart {
	type: typeof REMOVE_FROM_CART
	productId: string
}
export interface increaseQuantity {
	type: typeof INCREASE_QUANTITY
	productId: string
}
export interface decreaseQuantity {
	type: typeof DECREASE_QUANTITY
	productId: string
}

export type CartTypes =
	| addToCart
	| removeFromCart
	| increaseQuantity
	| decreaseQuantity
