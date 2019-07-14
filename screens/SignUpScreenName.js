import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { selectAssetSource } from 'expo-asset/build/AssetSources';
import Icon from 'react-native-vector-icons/Ionicons'

class SignUpScreenName extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: ""
        }
    }

    static navigationOptions = {
        title: 'Tell us about yourself!',
    };

    validName() {
        return (this.state.name.length > 0)
    }

    validUsername() {
        return (this.state.username.length > 0)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <TouchableOpacity>
                        <Image
                            style={styles.logo}
                            source={require('../assets/images/ProfilePicture.png')}
                        />
                    </TouchableOpacity>
                    <Text>Upload a profile picture!</Text>
                </View>

                <View>
                    {this.validName() ? (<Icon name={'ios-checkmark-circle'} size={28} style={styles.inputIcon}></Icon>) : null}

                    <TextInput
                        placeholder="Full Name"
                        placeholderTextColor="black"
                        style={styles.input}
                        onChangeText={name => this.setState({name})}
                    />
                </View>

                <View>
                    {this.validUsername() ? (<Icon name={'ios-checkmark-circle'} size={28} style={styles.inputIcon}></Icon>) : null}

                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="black"
                        style={styles.input}
                        onChangeText={username => this.setState({username})}
                    />
                </View>
                
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('App')}
                    style={(!this.validName() || !this.validUsername()) ? styles.buttonContainerDisabled : styles.buttonContainer}
                    disabled={!this.validName() || !this.validUsername()} >
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default SignUpScreenName;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingHorizontal: 30
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
    inputIcon: {
        position: 'absolute',
        top: 14,
        right: 25,
        zIndex: 1,
        opacity: 0.5,
        color: 'green'
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
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 30

    },
    logo: {
        width: 100, 
        height: 100
    }
});