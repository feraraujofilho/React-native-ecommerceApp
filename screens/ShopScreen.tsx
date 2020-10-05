import React, { FC } from "react";
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PRODUCTS from "../data/dummy-data-products"
import { Card, Content } from "native-base";


interface ShopScreenProps {
    navigation: any
}

const ShopScreen: FC<ShopScreenProps> = (props) => {

    const renderProductCard = (itemData: any) => {
        return (
            <Card style={styles.gridItem}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Product", {
                    productId: itemData.item.id
                }
                )}>
                    <ImageBackground source={{ uri: itemData.item.imageUrl }} style={styles.bgImage} imageStyle={{ borderRadius: 20 }}>
                        <View style={styles.productBox}>
                            <Text style={styles.text}>${itemData.item.price}</Text>
                            <Text style={styles.text} numberOfLines={1} >{itemData.item.title}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </Card>
        )

    }


    return <FlatList keyExtractor={(item) => item.id} data={PRODUCTS} renderItem={renderProductCard} numColumns={2} />
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    gridItem: {
        margin: 30,
        height: 180,
        width: 150,
        backgroundColor: "#ccc",
        borderRadius: 20
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    productBox: {
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    text: {
        color: "white",
        fontFamily: "Roboto"
    }


})

export default ShopScreen;