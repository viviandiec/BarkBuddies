import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from '../components/Card';
import { cards } from '../constants/Data';

class DescriptionScreen extends React.Component {
  static navigationOptions({ navigation }) {
    id = navigation.getParam('index');

    return {
      title: `${cards[id].doggoName} & ${cards[id].ownerName}`
    };
  }
  render() {
    id = this.props.navigation.getParam('index');

    return (
      <ScrollView>
        <Card description={true} index={id} />
        <View style={{ height: 300, paddingHorizontal: 18, marginTop: 10 }}>
          <View>
            <Text>Age: {cards[id].age}</Text>
            <Text>Gender: {cards[id].gender}</Text>
            <Text>Breed: {cards[id].breed}</Text>
            <Text>Size: {cards[id].size}</Text>
          </View>
          <View>
            <Text>More about Me!</Text>
            <Text>{cards[id].more}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default DescriptionScreen;
