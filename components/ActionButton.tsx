import React from "react"
import {  StyleSheet, Text } from "react-native"
import { Button } from "native-base"
import Colors from "../constants/Colors"


const ActionButton = (props: any) => {
return <Button {...props} rounded style={
    {...styles.root, ...props.style }}><Text style={styles.text}>{props.children}</Text></Button>

}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20, 
        backgroundColor: Colors.primaryColor,
        alignSelf: "center"
    },
    text: { 
        color: "white" 
    }
})


export default ActionButton