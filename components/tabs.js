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
  Image,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function Tab({ imgUri }) {
  return (
    <View>
      <Image
        style={{ borderRadius: 15, margin: 20 }}
        source={{
          width: 300,
          height: 200,
          uri: imgUri,
        }}
      />
    </View>
  );
}
