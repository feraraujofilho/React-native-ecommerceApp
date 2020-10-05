import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import ProductProps from "../types/ProductProps";
import { useDispatch, useSelector } from "react-redux"
import StateInterface from "../store/statetypes";
import { addToCart } from "../store/cart/actions";



interface ProductScreenProps {
    navigation: StackNavigationProp<any>,
}

const ProductScreen = ({ route, navigation }) => {

    const { productId } = route.params
    const allProducts = useSelector((state: StateInterface) => state.productState.products)
    const product = allProducts.find((product: ProductProps) => product.id === productId)

    const dispatch = useDispatch()

    const addProductToCart = () => {
        dispatch(addToCart(productId))
    }


    return <View style={styles.main}>
        <Text>{product?.title}</Text>
        <Button title="Add To Cart" onPress={addProductToCart} />
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