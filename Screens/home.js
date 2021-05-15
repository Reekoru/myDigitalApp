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
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function Home() {
  console.log(useDeviceOrientation());
  const { portrait } = useDeviceOrientation();
  return (
    <View
      style={StyleSheet.compose(styles.container, {
        alignItems: portrait ? "center" : "stretch",
      })}
    >
      <Text style={styles.headerText}>WELCOME</Text>
      <ScrollView
        /* check if phone is landscape or portrait*/
        horizontal={portrait ? "true" : "false"}
        vertical={portrait ? "false" : "true"}
        contentContainerStyle={StyleSheet.compose(styles.content, {
          flexDirection: portrait ? "column" : "row",
        })}
      >
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
    position: "sticky",
    bottom: 0,
  },

  headerText: {
    margin: "auto",
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    fontFamily: "Copperplate",
  },

  tabs: {
    margin: 15,
    borderRadius: 15,
  },

  text: {
    color: "white",
  },
});
