import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { cards, doggoImages } from '../constants/Data';

class StyledModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.visible
    };
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.modal}>
          <View style={styles.inside}>
            <Text style={{ color: '#FFF', fontSize: 20 }}>
              You matched with {cards[this.props.index - 1].doggoName}!
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Image style={styles.img} source={getPic(this.props.index - 1)} />
              <Image style={styles.img} source={getPic(90)} />
            </View>
            <Text style={{ color: '#FFF', fontSize: 16, textAlign: 'center' }}>
              Go to the chat page to start talking!
            </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.setState({ modalVisible: false })}>
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
  return doggoImages[0];
  //lolol TODO
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  inside: {
    width: 300,
    height: 300,
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

export default StyledModal;
