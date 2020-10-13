import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const PaymentConfirmationScreen: FC = () => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        
    },[])

    return <View style={styles.main}>
        <Text>Payment Confirmation</Text>
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