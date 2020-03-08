import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = props => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
      onChangeText={value => props.inputChange(value)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "grey",
    borderWidth: 1,
    textAlign: "center",
    width: "auto",
    padding: 5,
    marginVertical: 15
  }
});

export default Input;
