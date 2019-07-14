import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    static navigationOptions = {
        title: 'Tell us about yourself!',
    };

    validEmail() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return (re.test(this.state.email.toLowerCase()))
    }

    validPassword() {
        return (this.state.password.length >= 8)
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    {this.validEmail() ? (<Icon name={'ios-checkmark-circle'} size={28} style={styles.inputIcon}></Icon>) : null}

                    <TextInput
                        placeholder="Enter your email"
                        placeholderTextColor="black"
                        style={styles.input}
                        onChangeText={email => this.setState({email})}
                    />
                </View>
                
                <View>
                    {this.validPassword() ? (<Icon name={'ios-checkmark-circle'} size={28} style={styles.inputIcon}></Icon>) : null}

                    <TextInput
                        placeholder="Enter your password"
                        placeholderTextColor="black"
                        style={styles.input}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity 
                    style={(!this.validEmail() || !this.validPassword()) ? styles.buttonContainerDisabled : styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('UserInfoName')}
                    disabled={!this.validEmail() || !this.validPassword()}>
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
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    inputIcon: {
        position: 'absolute',
        top: 14,
        right: 25,
        zIndex: 1,
        opacity: 0.5,
        color: 'green'
    },
    buttonContainer: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#ffcb0c',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonContainerDisabled: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#ffcb0c',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        opacity: 0.5
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});