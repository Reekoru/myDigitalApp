/*
Author: Enrique
Version: 4
*/

import { StatusBar } from "expo-status-bar";
import Home from "./Screens/home.js";
import TunerScreen from "./Screens/tuner.js";

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  TextInput,
} from "react-native";

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
            backgroundColor: "rgb(50, 50, 50)",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        {/* Scrrens */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tuner" component={TunerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  navigatorHeader: {
    backgroundColor: "black",
  },
});
