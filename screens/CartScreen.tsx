import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const CartScreen: FC = () => {
    return <View style={styles.main}>
        <Text>{`${CartScreen}`}</Text>
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