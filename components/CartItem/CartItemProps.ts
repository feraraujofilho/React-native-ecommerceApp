import ProductProps from "../../types/ProductProps";

export default interface CartItemProps {
    navigation?: any
    item: ProductProps
    removeFunction: (productId: string) => void
    myProducts?: boolean
}
