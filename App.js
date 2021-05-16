import { StatusBar } from "expo-status-bar";
import Home from "./screens/home.js";
import Tuner from "./screens/tuner.js";
import styles from "./styles/styles.js";

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
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgb(50, 50, 50)",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tuner" component={Tuner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  navigatorHeader: {
    backgroundColor: "black",
  },
});
