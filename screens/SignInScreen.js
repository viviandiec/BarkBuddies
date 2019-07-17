import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this)

    this.state = {
      username:'',
      password: '',
      hidePassword: true,
      beenClicked: false
    };
  }

  clickHandler() {
    this.setState({beenClicked: true})

    if (this.validUsername() && this.validPassword())
      this.props.navigation.navigate('App')
  }

  validUsername() {
    return this.state.username.length > 0 && !this.state.username.includes(' ');
  }

  validPassword() {
    return this.state.password.length >= 1;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/images/iconWithName.jpg')}
            />
          </View>

          <View style={styles.textInput}>
            <Icon name={'ios-person'} size={28} style={styles.inputIcon} />

            <TextInput
              placeholder="Username"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={username => this.setState({ username })}
              textContentType="username"
              autoCorrect={false}
              autoCapitalize="none"
            />
            {(this.state.beenClicked && !this.validUsername()) ? <Text style={{color:'red', paddingHorizontal: 10, paddingTop: 2}}>Invalid username</Text> : null}
          </View>

          <View style={styles.textInput}>
            <Icon name={'ios-lock'} size={28} style={styles.inputIcon} />

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
                name={'ios-eye'}
                size={26}
                style={this.state.hidePassword ? null : { color: '#4db8c7' }}
                onPress={() =>
                  this.setState({ hidePassword: !this.state.hidePassword })
                }
                onChangeText={password => this.setState({ password })}
              />
            </TouchableOpacity>
            {(this.state.beenClicked && !this.validPassword()) ? <Text style={{color:'red', paddingHorizontal: 10, paddingTop: 2}}>Invalid password</Text> : null}
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.clickHandler} 
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('UserInfo')}
            style={{ alignItems: 'center', paddingTop: 4 }}
          >
            <Text style={{ color: '#2ea3f2', textDecorationLine: 'underline' }}>
              Don't have an account? Sign up
            </Text>
          </TouchableOpacity>
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
  textInput: {
    marginBottom: 20
  },
  input: {
    height: 55,
    backgroundColor: '#eee',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 45,
    borderColor: '#fff',
    color: 'black'
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 15,
    zIndex: 1,
    opacity: 0.5
  },
  btnEye: {
    position: 'absolute',
    top: 14,
    right: 25,
    zIndex: 1,
    opacity: 0.5
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
  },
  logoContainer: {
    paddingTop: 80,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    paddingTop: 20
  }
});
