import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const OrdersScreen: FC = () => {
    return <View style={styles.main}>
        <Text>{`${OrdersScreen}`}</Text>
    </View>
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default OrdersScreen;