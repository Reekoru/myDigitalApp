import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import Orientation from "../../scripts/detectOrientation.js";
import { RFValue } from "react-native-responsive-fontsize";
import Chord from "../../components/chord.js";

export default function GChords() {
  const [modalVisible, setModalVisible] = useState(true);
  // Create a new object to get orientation of screen
  const orientation = new Orientation();
  const portrait = orientation.isPortr;
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Hi! In this section, we will learn the basic chords which can be
              played in guitar. You will be able to use these chords to play
              countless of popular songs!
              {"\n"}
              {"\n"}
              Grab your guitar, read, play, review!
              {"\n"}
              LET'S DO IT!
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text
        style={{ fontSize: RFValue(32), color: "white", textAlign: "center" }}
      >
        THE BASIC CHORDS
      </Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={StyleSheet.compose(styles.ChordContent)}
      >
        <Pressable>
          <Chord
            imgUri={require("../../assets/Images/Chords/AChord.png")}
            chord="A"
          />
        </Pressable>
        <Chord
          imgUri={require("../../assets/Images/Chords/AmChord.png")}
          chord="Am"
        />
        <Chord
          imgUri={require("../../assets/Images/Chords/CChord.png")}
          chord="C"
        />
        <Chord
          imgUri={require("../../assets/Images/Chords/DChord.png")}
          chord="D"
        />
        <Chord
          imgUri={require("../../assets/Images/Chords/EChord.png")}
          chord="E"
        />
        <Chord
          imgUri={require("../../assets/Images/Chords/EmChord.png")}
          chord="Em"
        />
        <Chord
          imgUri={require("../../assets/Images/Chords/GChord.png")}
          chord="G"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "rgb(40,40,40)",
  },
  ChordContent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  content: {
    alignItems: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
