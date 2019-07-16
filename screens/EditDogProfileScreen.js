import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class EditDogProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Show us your dog!"
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={{ uri: "http://placekitten.com/256/256" }}
              />
              <View
                style={{
                  alignItems: "center",
                  width: 42,
                  height: 42,
                  position: "absolute",
                  right: -8,
                  bottom: -8,
                  backgroundColor: "lightgrey",
                  borderRadius: 26
                }}
              >
                <Icon
                  name={Platform.OS === "ios" ? "ios-camera" : "md-camera"}
                  size={24}
                  color="white"
                  style={{ paddingTop: 8 }}
                />
              </View>
            </TouchableOpacity>
            <View style={{ paddingTop: 32 }}>
              {Array.from(Array(2)).map((_, row) => (
                <View key={`row-${row}`} style={{ flexDirection: "row" }}>
                  {Array.from(Array(3)).map((_, col) => (
                    <View key={`col-${col}`} style={{ padding: 8 }}>
                      <PhotoBoxAdd />
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function PhotoBoxAdd() {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        width: 80,
        height: 80,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 8
      }}
    >
      <Text
        style={{
          fontSize: 32,
          paddingTop: 14
        }}
      >
        +
      </Text>
    </TouchableOpacity>
  );
}

export default EditDogProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 30
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 30
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
