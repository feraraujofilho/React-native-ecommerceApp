import CartItemInterface from "../types/CartItemInterface";
import ProductProps from "../types/ProductProps";

export interface ProductState {
    products: [ProductProps],
    cart: [CartItemInterface],
    order: [any],
}

export interface UserProductState {
    userProducts: [ProductProps]
}

export default interface StateInterface {
    productState: ProductState,
    userProductsState: UserProductState
}

