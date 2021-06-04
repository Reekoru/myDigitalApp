/*
Author: Enrique
Version: 4
*/

import { StatusBar } from "expo-status-bar";
import Home from "./Screens/mainScreens/home.js";
import TunerScreen from "./Screens/mainScreens/tuner.js";
import Guitar from "./Screens/mainScreens/guitar.js";
import Bass from "./Screens/mainScreens/bass.js";
import Settings from "./Screens/mainScreens/settings.js";

import GChords from "./Screens/subScreens/gBasicChords.js";

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  console.log("App Executed");
  return (
    <NavigationContainer>
      {/* Add Stack navigator to navigate to different screens*/}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgb(40, 40, 40)",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        {/* Scrrens */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Guitar" component={Guitar} />
        <Stack.Screen name="Bass" component={Bass} />
        <Stack.Screen name="Tuner" component={TunerScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Basic Chords" component={GChords} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  navigatorHeader: {
    backgroundColor: "black",
  },
});
