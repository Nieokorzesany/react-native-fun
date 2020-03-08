import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../Card/Card";
import Input from "../Input/Input";

const StartGame = props => {
  const [inputNumber, setInputNumber] = useState("");

  console.log("ads", props.gameNumber);

  const inputNumberHandler = input => {
    setInputNumber(input.replace(/[^0-9]/g, ""));
  };

  const confirmNumber = () => {
    if (inputNumber < 1 || !inputNumber) {
      Alert.alert("Error", "Enter a number between 1-99", [{ text: "OK" }], {
        cancelable: false
      });
      setInputNumber("");
    } else {
      props.setGameNumber(inputNumber);
      setInputNumber("");
      Keyboard.dismiss();
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            inputChange={inputNumberHandler}
            blurOnInput
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="number-pad"
            maxLength={2}
            value={inputNumber}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              color="red"
              onPress={() => props.setGameNumber("")}
            />
            <Button title="Confirm" onPress={() => confirmNumber()} />
          </View>
        </Card>
        {props.gameNumber ? (
          <Card style={styles.numberCard}>
            <Text>Your selected Number</Text>
            <View style={styles.numberContainer}>
              <Text style={styles.selectedNumber}>{props.gameNumber}</Text>
            </View>
            <Button title="Start game" onPress={() => props.startGame(true)} />
          </Card>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    height: 40
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    height: "auto",
    alignItems: "center"
  },
  numberCard: {
    width: 200,
    maxWidth: "80%",
    height: "auto",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    width: "100%",
    paddingHorizontal: 15
  },
  numberContainer: {
    height: "auto",
    borderColor: "blue",
    borderWidth: 2,
    padding: 12,
    marginVertical: 10,
    borderRadius: 50
  },
  selectedNumber: {
    fontSize: 20
  }
});

export default StartGame;
