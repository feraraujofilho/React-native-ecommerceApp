import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import StateInterface from "../store/statetypes";
import ProductProps from "../types/ProductProps";

const CartScreen: FC = () => {
    const cartProductsIds = useSelector((state: StateInterface) => state.productState.cart)
    const allProduct = useSelector((state: StateInterface) => state.productState.products)

    const productsInTheCart = allProduct.filter((product: ProductProps) => {
        return cartProductsIds.includes(product.id)
    })


    const renderItem = (itemData: any) => {
        return <View>
            <Text>{itemData.item.title}</Text>
            <Text>{itemData.item.description}</Text>
            <Text>{itemData.item.price}</Text>
        </View>
    }

    return <View style={styles.main}>
        <FlatList data={productsInTheCart} renderItem={(itemData) => renderItem(itemData)} />
        <Text>Hello</Text>
    </View>
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CartScreen;