import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import PRODUCTS from "../data/dummy-data-products"
import ProductProps from "../types/ProductProps";
import { useDispatch, useSelector } from "react-redux"



interface ProductScreenProps {
    navigation: StackNavigationProp<any>,
}

const ProductScreen = ({ route, navigation }) => {

    const { productId } = route.params
    const allProducts = useSelector
    const product = PRODUCTS.find((product: any) => product.id === productId)


    return <View style={styles.main}>
        <Text>{product.title}</Text>
        <Button title="Add To Cart" onPress={() => { }} />
        <Button title="Buy Now" onPress={() => { }} />
    </View>
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ProductScreen;