import React, { FC } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ActionButton from "../components/ActionButton";
import StateInterface from "../store/statetypes";

interface UserProductsScreenProps {
    navigation: any
}

const UserProductsScreen: FC<UserProductsScreenProps> = ({navigation}) => {
    const userProducts = useSelector((state: StateInterface) => state.userProductsState.userProducts)

    if (userProducts.length < 1){
        return <View style={styles.main}>
        <Text style={{marginVertical: 15}}>You dont have any products</Text>
        <ActionButton onPress={() => navigation.navigate("UserSingleProduct")}>Create Product</ActionButton>
    </View>
    }

    const renderSingleProduct = (itemData) => {
        return <View>
            <Text>{itemData.item.title}</Text>
        </View>
    }

    return <SafeAreaView style={styles.main}>
        <FlatList keyExtractor={(item) => item.id} data={userProducts} renderItem={renderSingleProduct} numColumns={1} />
        <ActionButton onPress={() => navigation.navigate("UserSingleProduct")}>Create Product</ActionButton>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default UserProductsScreen;