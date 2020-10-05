import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomerInfoScreen: FC = () => {
    return <View style={styles.main}>
        <Text>{`${CustomerInfoScreen}`}</Text>
    </View>
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CustomerInfoScreen;