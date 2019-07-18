import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
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
        <View
          style={{
            marginHorizontal: 30,
            height: 20,
            borderBottomColor: '#4db8c7',
            borderBottomWidth: 2
          }}
        />
        <View
          style={{ paddingHorizontal: 18, marginTop: 10, marginBottom: 30 }}
        >
          <View>
            <View style={styles.container}>
              <Text style={styles.header}>Age: </Text>
              <Text style={styles.info}>{cards[id].age}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.header}>Gender: </Text>
              <Text style={styles.info}>{cards[id].gender}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.header}>Breed: </Text>
              <Text style={styles.info}>{cards[id].breed}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.header}>Size: </Text>
              <Text style={styles.info}>{cards[id].size}</Text>
            </View>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.header}>More about Me!</Text>
            <Text>{cards[id].more}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    color: '#3599a7',
    fontSize: 18
  },
  container: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center'
  },
  info: {
    fontSize: 16,
    paddingTop: 2
  },
});
export default DescriptionScreen;
