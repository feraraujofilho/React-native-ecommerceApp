import ProductProps from "../ProductProps";

export default interface ProductState {
    products: Array<ProductProps>,
    cart: Array<string>,
    orders: Array<any>,
    myProducts: Array<ProductProps>
}