import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    elevation: 6,
    backgroundColor: "white",
    padding: 10
  }
});

export default Card;
