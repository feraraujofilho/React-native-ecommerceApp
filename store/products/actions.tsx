import { Dispatch } from "redux"
import ProductProps from "../../types/ProductProps"
import { ProductCreationInterface } from "./types"

export const CREATE_PRODUCT = "CREATE_PRODUCT"
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"

export const createProduct = (product: ProductCreationInterface) => {
    return async (dispatch: Dispatch) => {

        const response = await fetch("https://appcourse-1984b.firebaseio.com/products.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })

        const resData = await response.json()

        console.log(resData)

        dispatch({
            type: CREATE_PRODUCT,
            product: product
        })
    }
}

export const deleteProduct = (productId: string) => {
    return {
        type: CREATE_PRODUCT,
        producId: productId
    }
}

export const updateProduct = (product: ProductProps) => {
    return {
        type: UPDATE_PRODUCT,
        pid: product.id,
        product: product
    }
}