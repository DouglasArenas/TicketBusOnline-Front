import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
 
const Button = ({ onPress, children }) => {
    return(
        <Pressable style={style.button} onPress={onPress}>
            <Text>{children}</Text>
        </Pressable>
    );
};

const style = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
});

export default Button;