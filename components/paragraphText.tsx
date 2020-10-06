import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface ParagraphTextProps {
    style?: {}
}

const ParagraphText: FC<ParagraphTextProps> = ({ children, style }) => {
    return <Text style={{ ...style, ...styles.text }}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto"
    }
})

export default ParagraphText;