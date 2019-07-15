import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import Card from '../components/Card';

class DescriptionScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Card description={true} index={0} />
        <View style={{height: 500}}></View>
      </ScrollView>
    );
  }
}

export default DescriptionScreen;
