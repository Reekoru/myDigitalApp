import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Audio } from "expo-av";
import Chord from "../../components/chord.js";

export default function App() {
  const [sound, setSound] = useState();

  async function playAChord() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/a.wav")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function playAmChord() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/am.wav")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function playCChord() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/c.wav")
    );
    setSound(sound);
    
    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function playDChord() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/d.wav")
    );
    setSound(sound);
    
    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function playEChord() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/e.wav")
    );
    setSound(sound);
    
    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function playEmChord() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/em.wav")
    );
    setSound(sound);
    
    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function playGChord() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/g.wav")
    );
    setSound(sound);
    
    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={StyleSheet.compose(styles.ChordContent)}
      >
        <TouchableOpacity style={styles.chordTab} onPress={playAChord}>
          <Chord
            imgUri={require("../../assets/Images/Chords/AChord.png")}
            chord="A"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chordTab} onPress={playAmChord}>
          <Chord
            imgUri={require("../../assets/Images/Chords/AmChord.png")}
            chord="Am"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chordTab} onPress={playCChord}>
          <Chord
            imgUri={require("../../assets/Images/Chords/CChord.png")}
            chord="C"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chordTab} onPress={playDChord}>
          <Chord
            imgUri={require("../../assets/Images/Chords/DChord.png")}
            chord="D"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chordTab} onPress={playEChord}>
          <Chord
            imgUri={require("../../assets/Images/Chords/EChord.png")}
            chord="E"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chordTab} onPress={playEmChord}>
          <Chord
            imgUri={require("../../assets/Images/Chords/EmChord.png")}
            chord="Em"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chordTab} onPress={playGChord}>
          <Chord
            imgUri={require("../../assets/Images/Chords/GChord.png")}
            chord="G"
          />
        </TouchableOpacity>
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

  chordTab: {
    backgroundColor: "rgb(80,80,80)",
    margin: 20,
    borderRadius: 15,
  },

  ChordContent: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "rgb(50,50,50)",
    height: 300,
    marginVertical: 20,
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
