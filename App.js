import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header/Header";
import StartGame from "./components/StartGameScreen/StartGame";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container}>
        <StartGame />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
