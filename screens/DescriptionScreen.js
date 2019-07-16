import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import Card from '../components/Card';
import cards from '../constants/Data';

class DescriptionScreen extends React.Component {
  render() {
    cardId = this.props.navigation.getParam('index');
    console.log(cardId);
    return (
      <ScrollView>
        <Card description={true} index={cardId} />
        <View style={{ height: 500 }} />
      </ScrollView>
    );
  }
}

DescriptionScreen.navigationOptions = {
  title: "Profile",
};

export default DescriptionScreen;
