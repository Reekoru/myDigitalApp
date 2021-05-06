import { StatusBar } from "expo-status-bar";
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
  Header,
} from "react-native";

export default function Home() {
  console.log("App Executed");

  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: "center"}}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>Guitarista</Text>
      </SafeAreaView>

      <Image style={styles.tabs}
      source={{
        width: 300,
        height: 200,
        uri: "https://picsum.photos/300/200"
      }}
      />

    <Image style={styles.tabs}
      source={{
        width: 300,
        height: 200,
        uri: "https://picsum.photos/300/200"
      }}
      />

    <Image style={styles.tabs}
      source={{
        width: 300,
        height: 200,
        uri: "https://picsum.photos/300/200"
      }}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(50, 50, 50)",

  },

  header: {
    backgroundColor: "rgb(40, 40, 40)",
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    margin: 20,
    fontFamily: "Copperplate",
  },

  tabs: {
    marginVertical: 25,
    borderRadius: 15,
  },

  text: {
    color: "white",
  },
});
