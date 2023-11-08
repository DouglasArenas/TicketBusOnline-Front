import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({ value, setValue, placeholder }) => {
    return(
        <TextInput
            style={styles.input} 
            onChangeText={setValue}
            value={value}
            placeholder={placeholder}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginBottom: 10,
        paddingLeft: 10
    },
});

export default CustomTextInput;