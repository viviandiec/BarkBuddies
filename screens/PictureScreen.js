import React from 'react';
import { View, Button } from 'react-native';

class PictureScreen extends React.Component {
    static navigationOptions = {
        title: 'Upload pictures of your dog!',
    };

    render() {
        return (
            <View>
                <Button title="Sign Up!" onPress={() => this.props.navigation.navigate('App')} />
            </View>
        );
    }
}

export default PictureScreen;