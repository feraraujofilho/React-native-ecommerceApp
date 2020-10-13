import ProductProps from "../../types/ProductProps"
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./actions"
import { userProductTypes } from "./types"

const initialState = {
    userProducts: []
}

const userProductsReducer = (state = initialState, action: userProductTypes) => {
    switch(action.type){
        case CREATE_PRODUCT:
            const newArrayOfProducts = [...state.userProducts, action.product]
            return {
                ...state,
                userProducts: newArrayOfProducts
            }
        case UPDATE_PRODUCT: {
            const newProductsArray = [...state.userProducts].map((product: ProductProps) => {
                if (product.id === action.pid){
                    return action.product
                }
                else {
                    return product
                }
            })
            return {
                ...state,
                userProducts: newProductsArray
            }
        }
        case DELETE_PRODUCT:
            const productIndex = state.userProducts.findIndex((product: ProductProps) => {
                return product.id === action.productId
            })
            const newProductsArray = [...state.userProducts]
            newProductsArray.splice(productIndex, 1)
            return {
                ...state,
                userProducts: newProductsArray
            }
        default:
            return state
        
    }
}

export default userProductsReducer