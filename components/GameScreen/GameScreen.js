import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Card from "../Card/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rand = Math.floor(Math.random() * (max - min)) + min;
  if (rand === exclude) {
    generateRandomBetween(min, max, exclude);
  } else {
    return rand;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuess = (currentGuess, direction) => {
    console.log("fire");
    if (direction === "higher") {
      currentLow.current = currentGuess;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    }
    console.log(currentHigh.current, currentLow.current);
    setCurrentGuess(
      generateRandomBetween(currentLow.current, currentHigh.current, 0)
    );
  };

  const higherButtonHandler = () => {
    if (currentGuess > props.userChoice) {
      Alert.alert("Error", "Dont lie the number is lower", [{ text: "OK" }], {
        cancelable: false
      });
    } else {
      nextGuess(currentGuess, "higher");
    }
  };
  const lowerButtonHandler = () => {
    if (currentGuess < props.userChoice) {
      Alert.alert("Error", "Dont lie the number is higher", [{ text: "OK" }], {
        cancelable: false
      });
    } else {
      nextGuess(currentGuess, "lower");
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.gameCard}>
        <Text>Opponents guess</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.selectedNumber}>{currentGuess}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Higher"
            color="green"
            onPress={() => higherButtonHandler()}
          />
          <Button
            title="Lower"
            color="red"
            onPress={() => lowerButtonHandler()}
          />
        </View>
        {currentGuess == props.userChoice ? (
          <Text>
            {currentGuess} {props.userChoice}
          </Text>
        ) : null}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  gameCard: {
    width: 300,
    maxWidth: "80%",
    height: "auto",
    alignItems: "center",
    marginVertical: 30
  },
  numberContainer: {
    height: "auto",
    borderColor: "blue",
    borderWidth: 2,
    padding: 12,
    marginVertical: 10,
    borderRadius: 50
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    width: "100%",
    paddingHorizontal: 15
  },
  selectedNumber: {
    fontSize: 20
  }
});

export default GameScreen;
