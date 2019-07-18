import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this)

    this.state = {
      email: '',
      password: '',
      beenClicked: false
    };
  }

  static navigationOptions = {
    title: 'Tell us about yourself!'
  };

  clickHandler() {
    this.setState({beenClicked: true})

    if (this.validEmail() && this.validPassword())
      this.props.navigation.navigate('UserInfoName')
  }

  validEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.email.toLowerCase());
  }

  validPassword() {
    return this.state.password.length >= 8;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.textInput}>
            {this.validEmail() ? (
              <Icon
                name={'ios-checkmark-circle'}
                size={28}
                style={styles.inputIcon}
              />
            ) : null}
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={email => this.setState({ email })}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCorrect={false}
              autoCapitalize="none"
            />
            {(this.state.beenClicked && !this.validEmail()) ? <Text style={{color:'red', paddingHorizontal: 10, paddingTop: 2}}>Invalid email address</Text> : null}
          </View>

          <View style={styles.textInput}>
            {this.validPassword() ? (
              <Icon
                name={'ios-checkmark-circle'}
                size={28}
                style={styles.inputIcon}
              />
            ) : null}
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={password => this.setState({ password })}
              secureTextEntry={true}
              textContentType="password"
              autoCorrect={false}
              autoCapitalize="none"
            />
            {(this.state.beenClicked && !this.validPassword()) ? <Text style={{color:'red', paddingHorizontal: 10, paddingTop: 2}}>Password must be longer than 8 characters</Text> : null}
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

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40
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
    top: 37,
    right: 18,
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
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
