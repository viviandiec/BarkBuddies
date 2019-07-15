import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.welcomeImage}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.navigation.navigate("UserInfo")}
        >
          <Text style={styles.buttonText}>Edit your profile!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.navigation.navigate("DogInfo")}
        >
          <Text style={styles.buttonText}>Edit your dog's profile!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.navigation.navigate("Images")}
        >
          <Text style={styles.buttonText}>Edit your pictures!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30
  },
  buttonContainer: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#ffcb0c",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
});
