import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Tab extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={{ margin: 20, width: 300, height: 200 }}
          imageStyle={{ borderRadius: 15 }}
          //Get source of image
          source={this.props.imgUri}
          blurRadius={5}
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
          >
            <Text
              style={{
                color: "white",
                fontSize: RFValue(48),
                fontWeight: "bold",
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: 5, height: 5 },
                textShadowRadius: 10,
                textAlign: "center",
              }}
            >
              {/*Get title of image */}
              {this.props.imgTitle}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
