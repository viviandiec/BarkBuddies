import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class SignUpScreenName extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this)

    this.state = {
      name: '',
      username: '',
      beenClicked: false
    };
  }

  static navigationOptions = {
    title: 'Tell us about yourself!'
  };

  clickHandler() {
    this.setState({beenClicked: true})

    if (this.validName() && this.validUsername())
      this.props.navigation.navigate('DogInfo')
  }

  validName() {
    return this.state.name.length > 0;
  }

  validUsername() {
    return this.state.username.length > 0 && !this.state.username.includes(' ');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../assets/images/ProfilePicture.png')}
              />
              <View
                style={{
                  alignItems: 'center',
                  width: 42,
                  height: 42,
                  position: 'absolute',
                  right: -8,
                  bottom: -8,
                  backgroundColor: 'lightgray',
                  borderRadius: 26
                }}
              >
                <Icon
                  name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'}
                  size={24}
                  color="white"
                  style={{ paddingTop: 8 }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.textInput}>
            {this.validName() ? (
              <Icon
                name={'ios-checkmark-circle'}
                size={28}
                style={styles.inputIcon}
              />
            ) : null}

            <Text style={styles.label}>First Name</Text>
            <TextInput
              placeholder="Tell us your first name :)"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={name => this.setState({ name })}
              textContentType="name"
              autoCapitalize="words"
            />
            {(this.state.beenClicked && !this.validName()) ? <Text style={{color:'red', paddingHorizontal: 10, paddingTop: 2}}>Name is mandatory</Text> : null}
          </View>

          <View style={styles.textInput}>
            {this.validUsername() ? (
              <Icon
                name={'ios-checkmark-circle'}
                size={28}
                style={styles.inputIcon}
              />
            ) : null}

            <Text style={styles.label}>Username</Text>
            <TextInput
              placeholder="Pick a username!"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={username => this.setState({ username })}
              textContentType="username"
              autoCorrect={false}
              autoCapitalize="none"
            />
            {(this.state.beenClicked && !this.validUsername()) ? <Text style={{color:'red', paddingHorizontal: 10, paddingTop: 2}}>Username is mandatory and cannot contain spaces</Text> : null}
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.clickHandler} 
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </ScrollView>
        <KeyboardSpacer />
      </View>
    );
  }
}

export default SignUpScreenName;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 30
  },
  textInput: {
    marginBottom: 20
  },
  input: {
    height: 55,
    backgroundColor: '#eee',
    color: '#000',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  label: {
    color: 'black',
    paddingHorizontal: 10,
    paddingBottom: 5
  },
  inputIcon: {
    position: 'absolute',
    top: 35,
    right: 25,
    zIndex: 1,
    opacity: 0.5,
    color: 'green'
  },
  buttonContainer: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#4db8c7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonContainerDisabled: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#4db8c7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    opacity: 0.5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 30
  },
  logo: {
    width: 100,
    height: 100
  }
});
