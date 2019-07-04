import React from 'react';
import { View, Button } from 'react-native';

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View>
                <Button title="Sign in!" onPress={() => this.props.navigation.navigate('App')} />
                <Button title="Sign up!" onPress={() => this.props.navigation.navigate('Other')} />
            </View>
        );
    }
}

export default SignInScreen;