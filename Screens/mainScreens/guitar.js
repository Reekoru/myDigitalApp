import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Tab from "../../components/tabs.js";
import Orientation from "../../scripts/detectOrientation.js";

export default function Guitar({ navigation }) {
  const orientation = new Orientation();
  const portrait = orientation.isPortrait();

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
        <TouchableOpacity /*Tuner Tab*/
          onPress={() => {
            navigation.navigate("Basic Chords");
            console.log("Pressed: Tuner");
          }}
        >
          <Tab
            imgUri={{ uri: "https://picsum.photos/300/200" }}
            imgTitle="Basic Chords"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Tab
            imgUri={{ uri: "https://picsum.photos/300/200" }}
            imgTitle="Power Chords"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Tab
            imgUri={{ uri: "https://picsum.photos/300/200" }}
            imgTitle="Bar Chords"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(50, 50, 50)",
    alignItems: "center",
  },
});
