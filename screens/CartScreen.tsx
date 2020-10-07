import { Button } from "native-base";
import React, { FC } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import ParagraphText from "../components/ParagraphText";
import { removeFromCart } from "../store/cart/actions";
import StateInterface from "../store/statetypes";
import ProductProps from "../types/ProductProps";

const CartScreen: FC = () => {
    const cartProducts = useSelector((state: StateInterface) => state.productState.cart)
    const allProduct = useSelector((state: StateInterface) => state.productState.products)

    const productsInTheCart = allProduct.filter((product: ProductProps) => {
        return cartProducts.map(product => product.id).includes(product.id)
    })

    const dispatch = useDispatch()

    const removeProductFromCart = (productId: string) => {
        dispatch(removeFromCart(productId))
    }


    const renderItem = (itemData: any) => {
        const { item } = itemData
        return <CartItem item={item} removeFromCart={removeProductFromCart} />
    }

    if (productsInTheCart.length === 0) {
        return <View style={styles.errorMessage}><Text>No Products were added to the Cart</Text></View>
    }

    return <ScrollView>
        <FlatList data={productsInTheCart} renderItem={(itemData) => renderItem(itemData)} />
        <View style={{ backgroundColor: "#f9f9fb", marginVertical: 20, marginHorizontal: 10, padding: 20, borderRadius: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
                <ParagraphText>Product Quantity</ParagraphText>
                <ParagraphText>{productsInTheCart.length}</ParagraphText>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <ParagraphText>Products Price</ParagraphText>
                <ParagraphText>$ {productsInTheCart.reduce((acc: number, val: ProductProps) => {
                    return acc += val.price
                }, 0).toFixed(2)}</ParagraphText>
            </View>
            <View style={styles.line} />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 20, fontFamily: "Roboto_medium" }}>Total</Text>
                <Text style={{ fontSize: 20 }}>$ {productsInTheCart.reduce((acc: number, val: ProductProps) => {
                    return acc += val.price
                }, 0).toFixed(2)}</Text>
            </View>
        </View>
        <Button rounded style={{ backgroundColor: "#d56235", paddingHorizontal: 20, width: "90%", alignSelf: "center" }} onPress={() => { }}><Text style={{ color: "white", width: "100%", textAlign: "center" }}>Add To Cart</Text></Button>
    </ScrollView >
};

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#ccc',
        height: 0.8,
        width: "100%",
        alignSelf: 'center',
        marginVertical: 25
    },
    errorMessage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
})

export default CartScreen;