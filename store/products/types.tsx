import ProductProps from "../../types/ProductProps";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./actions";

export interface ProductCreationInterface {
    title: string,
    description: string,
    price: number,
    imageUrl: string,
    bannerImgUrl?: string
}

export interface createProduct {
    type: typeof CREATE_PRODUCT
    product: ProductCreationInterface
}

export interface updateProduct {
    type: typeof UPDATE_PRODUCT
    pid: string
    product: ProductProps
}

export interface deleteProduct {
    type: typeof DELETE_PRODUCT
    productId: string
}

export type userProductTypes = createProduct | deleteProduct | updateProduct