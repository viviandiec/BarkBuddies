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

class DogInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this)

    this.state = {
      name: '',
      age: '',
      breed: '',
      beenClicked: false
    };
  }

  clickHandler() {
    this.setState({beenClicked: true})

    if (this.validName() && this.validAge() && this.validBreed())
      this.props.navigation.navigate('App')
  }

  validName() {
    return this.state.name.length > 0;
  }

  validAge() {
    var re = /^[0-9\b]+$/;
    return re.test(this.state.age);
  }

  validBreed() {
    return this.state.breed.length > 0;
  }

  static navigationOptions = {
    title: 'Describe your dog!'
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../assets/images/DogProfilePicture.png')}
              />
              <View
                style={{
                  alignItems: 'center',
                  width: 42,
                  height: 42,
                  position: 'absolute',
                  right: -16,
                  bottom: -12,
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

            <Text style={styles.label}>Name</Text>
            <TextInput
              placeholder="Enter your dog's name"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={name => this.setState({ name })}
              textContentType="name"
              autoCapitalize="words"
            />
            {(this.state.beenClicked && !this.validName()) ? <Text style={{color:'red', paddingHorizontal: 10, paddingTop: 2}}>Name is mandatory</Text> : null}
          </View>

          <View style={styles.textInput}>
            {this.validAge() ? (
              <Icon
                name={'ios-checkmark-circle'}
                size={28}
                style={styles.inputIcon}
              />
            ) : null}

            <Text style={styles.label}>Age</Text>
            <TextInput
              placeholder="How old is your dog?"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={age => this.setState({ age })}
              keyboardType="numeric"
            />
            {(this.state.beenClicked && !this.validAge()) ? <Text style={{color:'red', paddingHorizontal: 10, paddingTop: 2}}>Age must be a number</Text> : null}
          </View>

          <View style={styles.textInput}>
            {this.validBreed() ? (
              <Icon
                name={'ios-checkmark-circle'}
                size={28}
                style={styles.inputIcon}
              />
            ) : null}

            <Text style={styles.label}>Breed</Text>
            <TextInput
              placeholder="Enter your dog's breed"
              placeholderTextColor="gray"
              style={styles.input}
              onChangeText={breed => this.setState({ breed })}
            />
            {(this.state.beenClicked && !this.validBreed()) ? <Text style={{color:'red', paddingHorizontal: 10, paddingTop: 2}}>Breed is mandatory</Text> : null}
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.clickHandler} 
          >
            <Text style={styles.buttonText}>FINISH PROFILE</Text>
          </TouchableOpacity>
        </ScrollView>
        <KeyboardSpacer />
      </View>
    );
  }
}

export default DogInfoScreen;

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
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
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
