import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const PaymentConfirmationScreen: FC = () => {
    return <View style={styles.main}>
        <Text>{`${PaymentConfirmationScreen}`}</Text>
    </View>
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default PaymentConfirmationScreen;