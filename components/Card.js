import React from 'react';
import { doggoImages, userImages, cards } from '../constants/Data';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card(props) {
  index = props.index;
  return (
    <View style={styles.card}>
      <View style={{ flex: 3 }}>
        <Image
          style={this.doggoImageStyle(props.description)}
          source={this.getImage(index, 'doggo')}
        />
        <Image
          style={this.userImageStyle(props.description)}
          source={this.getImage(index, '')}
        />
      </View>
      {props.description ? <View /> : <View style={{ height: 80 }} />}
      <View style={{ flex: 2, marginHorizontal: 18 }}>
        <Text style={styles.name}>{cards[index].doggoName}</Text>
        <View style={styles.row}>
          <Text style={styles.user}>{`& ${cards[index].ownerName}`}</Text>
          <View style={{ flexDirection: 'row', marginRight: 22, marginTop: 5 }}>
            <Ionicons
              size={20}
              name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}
              color={'#494848'}
            />
            <Text> Ottawa</Text>
          </View>
        </View>
        <Text style={styles.description}>{cards[index].description}</Text>
        {!props.description ? (
          <Ionicons
            style={styles.infoIcon}
            size={30}
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: description ? 400 : 320,
    height: description ? 400 : 350,
    alignSelf: 'center'
  };
};

userImageStyle = function(description) {
  return {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#edfcff',
    borderWidth: 5,
    position: 'absolute',
    right: 15,
    top: description ? 350 : 305
  };
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  name: {
    fontSize: 45,
    backgroundColor: 'transparent',
    marginBottom: -5
  },
  user: {
    marginTop: -5,
    fontSize: 25
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  description: {
    fontSize: 16,
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
    right: 5,
    bottom: 10
  }
});
