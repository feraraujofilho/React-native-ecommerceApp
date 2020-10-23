import CartItemInterface from "../types/CartItemInterface"

export const calculateTotalQuantity = (cartProducts: [CartItemInterface]) => {
    return cartProducts.reduce((acc, val) => {
        return (acc += val.quantity)
    }, 0)
}