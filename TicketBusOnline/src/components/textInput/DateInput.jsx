import React from 'react';
import DatePicker from 'react-native-datepicker';
import { StyleSheet } from 'react-native';

const CustomDateInput = ({ value, setValue, placeholder }) => {
    return (
      <DatePicker
        style={{width: 200}}
        date={value}
        mode="date"
        placeholder={placeholder}
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => {setValue(date)}}
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

export default CustomDateInput;