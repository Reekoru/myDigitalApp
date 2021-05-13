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
  Dimensions,
  Platform,
} from "react-native";

export default function Home() {
  /**
   * Returns true if the screen is in portrait mode
   */
  const isPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  /**
   * Returns true of the screen is in landscape mode
   */
  const isLandscape = () => {
    const dim = Dimensions.get("screen");
    return dim.width >= dim.height;
  };

  this.state = {
    orientation: isPortrait() ? "portrait" : "landscape",
  };

  // Event Listener for orientation changes
  Dimensions.addEventListener("change", () => {
    this.setState({
      orientation: Platform.isPortrait() ? "portrait" : "landscape",
    });
  });

  if (this.state.orientation === "portrait") {
    console.log(1);
  } else if (this.state.orientation === "landscape") {
    console.log(0);
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Text style={styles.headerText}>WELCOME</Text>
        <Image
          style={styles.tabs}
          source={{
            width: 300,
            height: 200,
            uri: "https://picsum.photos/300/200",
          }}
        />

        <Image
          style={styles.tabs}
          source={{
            width: 300,
            height: 200,
            uri: "https://picsum.photos/300/200",
          }}
        />

        <Image
          style={styles.tabs}
          source={{
            width: 300,
            height: 200,
            uri: "https://picsum.photos/300/200",
          }}
        />
      </ScrollView>

      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(50, 50, 50)",
    paddingTop: 50,
  },

  footer: {
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
