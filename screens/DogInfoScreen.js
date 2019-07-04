import React from 'react';
import { View, Button, TextInput } from 'react-native';

class DogInfoScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: undefined
        }
    }
    
    static navigationOptions = {
        title: 'Tell us about your dog!',
    };

    render() {
        return (
            <View>
                <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
                <Button title="Sign Up!" onPress={() => this.props.navigation.navigate('Images')} />
            </View>
        );
    }
}

export default DogInfoScreen;