import React, { FC } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PRODUCTS from "../data/dummy-data-products"
import { StackNavigationProp } from '@react-navigation/stack';


interface ShopScreenProps {
    navigation: any
}

const ShopScreen: FC<ShopScreenProps> = (props) => {

    const renderProductCard = (itemData: any) => {
        console.log()
        return <TouchableOpacity onPress={() => props.navigation.navigate("Product", {
            productId: itemData.item.id
        }
        )} style={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
        </TouchableOpacity>

    }


    return <FlatList keyExtractor={(item) => item.id} data={PRODUCTS} renderItem={renderProductCard} numColumns={3} />
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        width: 150,
        backgroundColor: "#ccc"
    }
})

export default ShopScreen;