import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
  TextInput,
  Image,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Tab from "../components/tabs.js";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  console.log(useDeviceOrientation());
  const { portrait } = useDeviceOrientation();
  return (
    <View
      style={StyleSheet.compose(styles.container, {
        alignItems: portrait ? "center" : "stretch",
      })}
    >
      <ScrollView
        /* check if phone is landscape or portrait*/
        horizontal={portrait ? false : true}
        vertical={portrait ? true : false}
        contentContainerStyle={StyleSheet.compose(styles.content, {
          flexDirection: portrait ? "column" : "row",
        })}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Tuner");
            console.log("Pressed Tab 1");
          }}
        >
          <Tab imgUri={"https://picsum.photos/300/200"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Tab imgUri={"https://picsum.photos/300/200"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Tab imgUri={"https://picsum.photos/300/200"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Tab imgUri={"https://picsum.photos/300/200"} />
        </TouchableOpacity>
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
  },

  tabs: {
    margin: 15,
    borderRadius: 15,
  },

  text: {
    color: "white",
  },
});
