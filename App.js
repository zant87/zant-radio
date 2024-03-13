import { Button } from "@rneui/base";
import { Icon } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";

// const image = {
//   uri: "https://kartinki.pics/uploads/posts/2022-03/1647037882_1-kartinkin-net-p-klubnie-kartinki-1.jpg",
// };

// const image = {
//   uri: "./assets/background.jpg",
// };

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerInstance, setPlayerInstance] = useState(null);

  useEffect(() => {
    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: "https://megapolisfm.hostingradio.ru/megapolisfm96.aacp",
      };
      //playbackInstance.loadAsync(source);
      playbackInstance.loadAsync(source);
      setPlayerInstance(playbackInstance);
    } catch (error) {
      console.log("Error loading audio", error);
    }
  }, []);

  return (
    <ImageBackground
      //source={image}
      source={require("./assets/background.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Button color={"primary"}>
        <Icon name="rowing" />
        Playing
      </Button>
      <Icon
        name="play"
        onPress={(e) => {
          debugger;
          console.log(e);
        }}
      /> */}
        {/* <Icon
        reverse
        name="ios-american-football"
        type="ionicon"
        color="#517fa4"
      /> */}
        <AntDesign
          name={isPlaying ? "pause" : "playcircleo"}
          size={90}
          color="#fff"
          onPress={async (e) => {
            if (isPlaying) {
              await playerInstance.pauseAsync();
            } else {
              await playerInstance.playAsync();
            }
            setIsPlaying(!isPlaying);
          }}
        />
        <Text style={styles.innerText}>zant radio</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    //width: 100,
  },
  container: {
    position: "absolute",
    bottom: 140,
    left: 0,
    right: 0,
    //flex: 1,
    // backgroundColor: "#fff",
    backgroundImage: "./assets/adaptive-ico.png",
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    fontWeight: "bold",
    paddingTop: 20,
    color: "#fff",
  },
});
