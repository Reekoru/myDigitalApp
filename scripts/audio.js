import Sound from "react-native-sound";

Sound.setCategory("Ambient", true);

const A = new Sound(require("../assets/audio/A.wav"), (error) =>
  console.log(error)
);
export const AChord = () => {
  A.play((success) => A.reset());
};
