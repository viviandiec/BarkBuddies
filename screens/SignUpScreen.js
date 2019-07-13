import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: undefined
        }
    }

    static navigationOptions = {
        title: 'Tell us about yourself!',
    };

    render() {
        return (
            <View style={styles.container}>
                {/* <Button title="Sign in!" onPress={() => this.props.navigation.navigate('UserInfoName')} /> */}
                {/* <Button title="Sign up!" onPress={() => this.props.navigation.navigate('Other')} /> */}
                <TextInput
                    placeholder="Enter your email"
                    placeholderTextColor="black"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor="black"
                    style={styles.input}
                />
                
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('UserInfoName')}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40
    },
    input: {
        height: 55,
        backgroundColor: '#eee',
        marginBottom: 20,
        color: '#000', 
        paddingHorizontal: 10,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonContainer: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#ffcb0c',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});