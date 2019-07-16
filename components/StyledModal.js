import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
  TouchableHighlight
} from 'react-native';

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
            <Text>You matched!</Text>
            <View style={{ height: 30 }} />
            <Button
              style={styles.button}
              title="Close"
              color="#F6967D"
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

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  inside: {
    height: 200,
    width: 300,
    backgroundColor: 'white',
    borderColor: '#f7c5b8',
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StyledModal;
