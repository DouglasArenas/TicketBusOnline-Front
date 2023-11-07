import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, children }) => {
    return(
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default Button;