import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
  TextInput,
  Image,
} from "react-native";

export default function Tuner() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Tuner Screen</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(50, 50, 50)",
    alignItems: "center",
  },

  content: {
    alignItems: "center",
  },

  footer: {
    backgroundColor: "rgb(40, 40, 40)",
    height: 50,
    width: "100%",
    flexDirection: "row",
  },

  tabs: {
    margin: 25,
    borderRadius: 15,
  },

  text: {
    color: "white",
  },
});
