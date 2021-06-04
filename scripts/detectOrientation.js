import React from "react";
import { View, Text } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default class Orientation {
  isPortrait() {
    const { portrait } = useDeviceOrientation();
    return portrait;
  }

  isLandscape() {
    const { landscape } = useDeviceOrientation();
    return landscape;
  }
}
