import React from "react";
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen(props) {
  return (
    <View style={{ paddingTop: 120 }}>
      <View style={{ alignItems: "center" }}>
        <View>
          <Image
            style={{ width: 128, height: 128, borderRadius: 64 }}
            source={{ uri: "http://placekitten.com/256/256" }}
          />
          <Image
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              position: "absolute",
              right: -24,
              bottom: -16,
              borderWidth: 6,
              borderColor: "white"
            }}
            source={{ uri: "http://placekitten.com/256/256" }}
          />
        </View>
        <Text style={{ fontSize: 28, fontWeight: "bold", padding: 16 }}>
          Ellen & Woof
        </Text>
        <View style={{ flexDirection: "row", paddingTop: 32 }}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => props.navigation.navigate("EditProfile")}
            >
              <Ionicons
                name={Platform.OS === "ios" ? "ios-person" : "md-person"}
                color="white"
                size={32}
                style={{ paddingTop: 8 }}
              />
            </TouchableOpacity>
            <Text>Edit Profile</Text>
          </View>
          <View style={{ width: 90 }} />
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => props.navigation.navigate("EditDogProfile")}
            >
              <Ionicons
                name={Platform.OS === "ios" ? "ios-paw" : "md-paw"}
                color="white"
                size={32}
                style={{ paddingTop: 8 }}
              />
            </TouchableOpacity>
            <Text>Edit Dog Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    backgroundColor: "lightgray",
    width: 50,
    height: 50,
    borderRadius: 25
  }
});

ProfileScreen.navigationOptions = {
  header: null
};
