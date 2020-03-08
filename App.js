import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header/Header";
import StartGame from "./components/StartGameScreen/StartGame";
import GameScreen from "./components/GameScreen/GameScreen";

export default function App() {
  const [gameStart, setGameStart] = useState(false);
  const [gameNumber, setGameNumber] = useState("");
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container}>
        {gameStart ? (
          <GameScreen userChoice={gameNumber} />
        ) : (
          <StartGame
            setGameNumber={setGameNumber}
            gameNumber={gameNumber}
            startGame={setGameStart}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
