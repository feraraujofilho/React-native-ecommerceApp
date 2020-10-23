import ProductState from '../../types/states/AppState'
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CartTypes,
	INCREASE_QUANTITY,
	DECREASE_QUANTITY,
} from './types'

import PRODUCTS from '../../data/dummy-data-products'

const initialState: ProductState = {
	products: PRODUCTS,
	cart: [],
	orders: [],
}

const cartReducer = (state = initialState, action: CartTypes) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.productDetails],
			}
		case REMOVE_FROM_CART:
			const { cart } = state
			const indexOfProduct = cart.findIndex((productId) => {
				return productId === action.productId
			})
			const newCart = [...state.cart]
			newCart.splice(indexOfProduct, 1)
			return {
				...state,
				cart: newCart,
			}
		case INCREASE_QUANTITY:
			const elementIndex = state.cart.findIndex(
				(el: any) => el.id === action.productId
			)
			const updatedCart = [...state.cart].map((val: any, ind) => {
				if (ind === elementIndex) {
					return {
						...val,
						quantity: val.quantity + 1,
					}
				}
				return val
			})

			return {
				...state,
				cart: updatedCart,
			}
		case DECREASE_QUANTITY:
			const indexOfElement = state.cart.findIndex(
				(el: any) => el.id === action.productId
			)
			const updatedNewCart = [...state.cart].map((val: any, ind) => {
				if (ind === indexOfElement && state.cart[indexOfElement].quantity > 1) {
					return {
						...val,
						quantity: val.quantity - 1,
					}
				}
				return val
			})

			return {
				...state,
				cart: updatedNewCart,
			}
		default:
			return state
	}
}

export default cartReducer
