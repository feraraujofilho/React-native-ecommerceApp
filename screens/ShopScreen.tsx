import React, { FC } from "react";
import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PRODUCTS from "../data/dummy-data-products"
import { Card, Content } from "native-base";


interface ShopScreenProps {
    navigation: any
}

const ShopScreen: FC<ShopScreenProps> = (props) => {

    const renderProductCard = (itemData: any) => {
        return (
            <View style={styles.gridItem}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Product", {
                    productId: itemData.item.id
                }
                )}>
                    <Image source={{ uri: itemData.item.imageUrl }} style={styles.bgImage} />
                    <Text numberOfLines={2} style={styles.text}>{itemData.item.title}</Text>
                </TouchableOpacity>
            </View>
        )

    }


    return <SafeAreaView style={styles.main}>
        <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.header}>Best Products</Text>
            <View style={styles.line} />
        </View>
        <FlatList keyExtractor={(item) => item.id} data={PRODUCTS} renderItem={renderProductCard} numColumns={2} />
    </SafeAreaView>
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#f3f1f4",
        alignItems: "center"
    },
    gridItem: {
        marginVertical: 15,
        marginHorizontal: 15,
        height: 150,
        width: 150,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
    },
    bgImage: {
        width: 100,
        height: 100,
    },
    productBox: {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    text: {
        fontFamily: "Roboto",
        textAlign: "center",
        paddingHorizontal: 10
    },
    line: {
        backgroundColor: '#a2a5b0',
        height: 0.5,
        width: "20%",
        alignSelf: 'center',
        marginHorizontal: 10
    },
    header: {
        color: "#a2a5b0",
        fontFamily: "Roboto"
    },
    lineContainer: {
        flexDirection: 'row',
        marginTop: 60,
        marginBottom: 10
    }


})

export default ShopScreen;