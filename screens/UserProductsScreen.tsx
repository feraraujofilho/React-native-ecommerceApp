import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const UserProductsScreen: FC = () => {
    return <View style={styles.main}>
        <Text>{`${UserProductsScreen}`}</Text>
    </View>
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default UserProductsScreen;