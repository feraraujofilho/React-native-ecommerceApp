import ProductProps from "../ProductProps";

export default interface ProductState {
    products: Array<ProductProps>,
    cart: Array<ProductProps>,
    orders: Array<any>,
    myProducts: Array<ProductProps>
}