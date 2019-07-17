import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import KeyboardSpacer from 'react-native-keyboard-spacer';

class EditDogProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      height: 0,
      nameText: undefined,
      ageText: "6",
      breedText: undefined
    };
  }

  static navigationOptions = {
    title: "Show us your dog!"
  };

  isNotEmptyText(input) {
    return input !== "";
  }

  validAge() {
    var re = /^[0-9\b]+$/;
    return re.test(this.state.ageText);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require("../assets/images/doggos/pic_tofu.jpg")}
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
          </View>
          <View>
            <View>
              {this.isNotEmptyText(this.state.nameText) ? (
                <Icon
                  name={"ios-checkmark-circle"}
                  size={28}
                  style={styles.inputIcon}
                />
              ) : null}
              <Text style={styles.label}>Name</Text>
              <TextInput
                defaultValue="Doodles"
                style={styles.input}
                textContentType="name"
                autoCapitalize="words"
                onChangeText={text => this.setState({ nameText: text })}
              />
            </View>
            <View>
              {this.validAge() ? (
                <Icon
                  name={"ios-checkmark-circle"}
                  size={28}
                  style={styles.inputIcon}
                />
              ) : null}
              <Text style={styles.label}>Age</Text>
              <TextInput
                defaultValue={this.state.ageText}
                style={styles.input}
                keyboardType="numeric"
                onChangeText={text => this.setState({ ageText: text })}
              />
            </View>
            <View>
              {this.isNotEmptyText(this.state.breedText) ? (
                <Icon
                  name={"ios-checkmark-circle"}
                  size={28}
                  style={styles.inputIcon}
                />
              ) : null}
              <Text style={styles.label}>Breed</Text>
              <TextInput
                defaultValue="Labrador"
                style={styles.input}
                textContentType="name"
                autoCapitalize="words"
                onChangeText={text => this.setState({ breedText: text })}
              />
            </View>
            <View>
              <Text style={styles.label}>About me</Text>
              <TextInput
                {...this.props}
                multiline={true}
                onChangeText={text => {
                  this.setState({ text });
                }}
                onContentSizeChange={event => {
                  this.setState({
                    height: event.nativeEvent.contentSize.height
                  });
                }}
                style={[
                  styles.input,
                  { height: Math.max(52, this.state.height + 32) }
                ]}
                value={this.state.text}
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.label}>Upload your images</Text>
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
          <View style={{ paddingTop: 16, paddingBottom: 42 }}>
            <TouchableOpacity
              style={
                this.isNotEmptyText(this.state.nameText) &&
                this.validAge() &&
                this.isNotEmptyText(this.state.breedText)
                  ? styles.buttonContainer
                  : { ...styles.buttonContainer, opacity: 0.5 }
              }
              onPress={() => this.props.navigation.navigate("Profile")}
              disabled={
                !this.isNotEmptyText(this.state.nameText) ||
                !this.validAge() ||
                !this.isNotEmptyText(this.state.breedText)
              }
            >
              <Text style={styles.buttonText}>SAVE CHANGES</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <KeyboardSpacer />
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
  },
  buttonContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#4db8c7",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF"
  },
  label: {
    color: "black",
    paddingHorizontal: 10,
    paddingBottom: 5
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
  inputIcon: {
    position: "absolute",
    top: 35,
    right: 25,
    zIndex: 1,
    opacity: 0.5,
    color: "green"
  },
  buttonContainerDisabled: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#4db8c7",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    opacity: 0.5
  }
});
