import React from 'react';
import { doggoImages, userImages, cards } from '../constants/Data';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card(props) {
  index = props.index;
  console.log(cards[index].doggoName);
  return (
      <View style={styles.card}>
        <Image
          style={this.doggoImageStyle(props.description)}
          source={this.getImage(index, 'doggo')}
        />
        <Image
          style={this.userImageStyle(props.description)}
          source={this.getImage(index, '')}
        />
        <Text style={styles.name}>{cards[index].doggoName}</Text>
        <Text style={styles.description}>{cards[index].description}</Text>
        {!props.description ? (
          <Ionicons
            style={styles.infoIcon}
            size={50}
            name={
              Platform.OS === 'ios'
                ? 'ios-information-circle'
                : 'md-information-circle'
            }
            color={'#494848'}
          />
        ) : (
          <View />
        )}
      </View>
  );
}

getImage = (num, type) => {
  if (type == 'doggo') {
    return doggoImages[num];
  }
  return userImages[num];
};

doggoImageStyle = function(description) {
  return {
    width: description ? 400 : 300,
    height: description ? 400 : 300,
    marginTop: description ? 0 : 10,
    alignSelf: 'center'
  };
};

userImageStyle = function(description) {
  return {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#F6967D',
    borderWidth: 4,
    position: 'absolute',
    right: 20,
    top: description ? 350 : 260
  };
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  name: {
    marginHorizontal: 12,
    fontSize: 45,
    backgroundColor: 'transparent'
  },
  description: {
    marginHorizontal: 18,
    fontSize: 15,
    color: '#404040'
  },
  doggoImage: {
    width: 300,
    height: 300,
    marginTop: 10,
    alignSelf: 'center'
  },
  infoIcon: {
    position: 'absolute',
    right: 20,
    top: 470
  }
});
