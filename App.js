import { StatusBar } from "expo-status-bar";
import Home from "./Screens/home.js";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  TextInput,
} from "react-native";

export default function App() {
  console.log("App Executed");

  return <Home />;
}
