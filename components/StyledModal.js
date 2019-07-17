import React from 'react';
import { Image, StyleSheet, View, Text, Button, Modal } from 'react-native';
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
            <Button
              title="     Close     "
              color="#b5d4d8"
              onPress={() => {
                this.setState({ modalVisible: false });
              }}
            />
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
  }
});

export default StyledModal;
