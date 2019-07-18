import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native';
import { cards, doggoImages } from '../constants/Data';

class BarkInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.visible
    };
  }

  render() {
    return (
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.modal}>
          <View style={styles.inside}>
            <Text
              style={{
                color: '#4db8c7',
                fontSize: 22,
                marginBottom: 15,
                fontWeight: 'bold'
              }}
            >
              Welcome to Bark Buddies!
            </Text>
            <Text style={{ color: '#FFF', fontSize: 16, marginTop: 15 }}>
              Bark Buddies is a mobile app that connects dogs and their owners
              to other dogs and their owners in order to create a strong sense
              of community and friendship.
            </Text>
            <Text
              style={{
                color: '#FFF',
                fontSize: 16,
                marginBottom: 15,
                marginTop: 15
              }}
            >
              To access the swipe click on the paw. Once you are there, you can
              swipe right to chat and swipe left to skip. To view a list of your
              chats, click on the message icon. To view or change you profile,
              click on the profile icon
            </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Text style={styles.buttonText}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

getPic = num => {
  if (num < 12) {
    return doggoImages[num];
  }
  return require('../assets/images/mydog.jpeg');
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  },
  inside: {
    width: 300,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#edfcff',
    borderWidth: 3,
    marginHorizontal: 10
  },
  buttonContainer: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#4db8c7',
    borderRadius: 10,
    width: 200
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

export default BarkInfoScreen;
