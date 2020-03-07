import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const StartGame = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reject" color="red" />
          <Button title="Confirm" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    height: 120,
    alignItems: "center",
    elevation: 6,
    backgroundColor: "white",
    padding: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    width: "100%",
    paddingHorizontal: 15
  }
});

export default StartGame;
