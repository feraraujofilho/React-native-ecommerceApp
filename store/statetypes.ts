import ProductProps from "../types/ProductProps";

export interface State {
    products: [ProductProps],
    cart: [ProductProps],
    order: [any],
    myProducts: [ProductProps]
}

export default interface StateInterface {
    productState: State
}

