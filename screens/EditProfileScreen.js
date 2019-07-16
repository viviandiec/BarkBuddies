import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import KeyboardSpacer from "react-native-keyboard-spacer";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John Smith",
      username: "john_smith99",
      email: "john_smith@gmail.com"
    };
  }

  static navigationOptions = {
    title: "Tell us about yourself!"
  };

  validName() {
    return this.state.name.length > 0;
  }

  validUsername() {
    return this.state.username.length > 0;
  }

  validEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.email.toLowerCase());
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require("../assets/images/ProfilePicture.png")}
              />
            </TouchableOpacity>
            <Text>Change profile picture!</Text>
          </View>

          <View>
            {this.validName() ? (
              <Icon
                name={"ios-checkmark-circle"}
                size={28}
                style={styles.inputIcon}
              />
            ) : null}

            <Text style={styles.label}>Full Name</Text>
            <TextInput
              defaultValue="John Smith"
              style={styles.input}
              onChangeText={name => this.setState({ name })}
              textContentType="name"
              autoCapitalize="words"
            />
          </View>

          <View>
            {this.validUsername() ? (
              <Icon
                name={"ios-checkmark-circle"}
                size={28}
                style={styles.inputIcon}
              />
            ) : null}

            <Text style={styles.label}>Username</Text>
            <TextInput
              defaultValue="john_smith99"
              style={styles.input}
              onChangeText={username => this.setState({ username })}
              textContentType="name"
              autoCapitalize="words"
            />
          </View>

          <View>
            {this.validEmail() ? (
              <Icon
                name={"ios-checkmark-circle"}
                size={28}
                style={styles.inputIcon}
              />
            ) : null}
            <Text style={styles.label}>Email</Text>
            <TextInput
              defaultValue="john_smith@gmail.com"
              style={styles.input}
              onChangeText={email => this.setState({ email })}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Home")}
            style={
              !this.validName() || !this.validUsername() || !this.validEmail()
                ? styles.buttonContainerDisabled
                : styles.buttonContainer
            }
            disabled={!this.validName() || !this.validUsername()}
          >
            <Text style={styles.buttonText}>SAVE CHANGES</Text>
          </TouchableOpacity>
        </ScrollView>
        <KeyboardSpacer />
      </View>
    );
  }
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 30
  },
  input: {
    height: 55,
    backgroundColor: "#eee",
    marginBottom: 20,
    color: "#000",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  label:{
    color: 'black',
    paddingHorizontal:10,
    paddingBottom: 5
  },
  inputIcon: {
    position: "absolute",
    top: 35,
    right: 25,
    zIndex: 1,
    opacity: 0.5,
    color: "green"
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
  buttonContainerDisabled: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#ffcb0c",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    opacity: 0.5
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 30
  },
  logo: {
    width: 100,
    height: 100
  }
});
