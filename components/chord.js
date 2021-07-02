import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Chord extends Component {
  render() {
    return (
      <View style={{ margin: 10 }}>
        <Text
          style={{
            color: "white",
            fontSize: RFValue(48),
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {/*Get title of image */}
          {this.props.chord}
        </Text>
        <ImageBackground
          style={{ width: 140, height: 150 }}
          imageStyle={{ borderRadius: 15 }}
          //Get source of image
          source={this.props.imgUri}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          ></View>
        </ImageBackground>
      </View>
    );
  }
}
