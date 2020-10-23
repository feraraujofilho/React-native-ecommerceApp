import CartItemInterface from '../../types/CartItemInterface'
import ProductProps from '../../types/ProductProps'

import * as types from './types'

export const addToCart = (item: CartItemInterface) => {
	return {
		type: types.ADD_TO_CART,
		productDetails: item,
	}
}

export const removeFromCart = (item: string) => {
	return {
		type: types.REMOVE_FROM_CART,
		productId: item,
	}
}

export const increaseQuantity = (itemId: string) => {
	return {
		type: types.INCREASE_QUANTITY,
		productId: itemId,
	}
}

export const decreaseQuantity = (itemId: string) => {
	return {
		type: types.DECREASE_QUANTITY,
		productId: itemId,
	}
}
