import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import KeyboardSpacer from "react-native-keyboard-spacer";

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidePassword: true
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/images/icon.png")}
            />
          </View>

          <View>
            <Icon name={"ios-person"} size={28} style={styles.inputIcon} />

            <TextInput
                placeholder="Username"
                placeholderTextColor="gray"
                style={styles.input}
                textContentType="username"
                autoCorrect={false}
                autoCapitalize="none"
              />

          </View>

          <View>
            <Icon name={"ios-lock"} size={28} style={styles.inputIcon} />

            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              style={styles.input}
              secureTextEntry={this.state.hidePassword}
              textContentType="password"
              autoCorrect={false}
              autoCapitalize="none"
            />

            <TouchableOpacity style={styles.btnEye}>
              <Icon
                name={"ios-eye"}
                size={26}
                style={this.state.hidePassword ? null : { color: "red" }}
                onPress={() =>
                  this.setState({ hidePassword: !this.state.hidePassword })
                }
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("App")}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <Button
            title="Don't have an account? Sign up"
            onPress={() => this.props.navigation.navigate("UserInfo")}
          />
        </ScrollView>
        <KeyboardSpacer />
      </View>
    );
  }
}

SignInScreen.navigationOptions = {
  header: null
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 30
  },
  input: {
    height: 55,
    marginBottom: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 45,
    borderColor: "#fff",
    color: "black"
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 15,
    zIndex: 1,
    opacity: 0.5
  },
  btnEye: {
    position: "absolute",
    top: 14,
    right: 25,
    zIndex: 1,
    opacity: 0.5
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
  logoContainer: {
    paddingTop: 100,
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 30
  },
  logo: {
    width: 120,
    height: 120,
    paddingVertical: 30
  }
});
