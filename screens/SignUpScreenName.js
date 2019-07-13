import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { selectAssetSource } from 'expo-asset/build/AssetSources';

class SignUpScreenName extends React.Component {
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
                <View style={styles.logoContainer}>
                    <TouchableOpacity>
                        <Image
                            style={styles.logo}
                            source={require('../assets/images/ProfilePicture.png')}
                        />
                    </TouchableOpacity>
                    <Text>Upload a profile picture!</Text>
                </View>

                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="black"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Username"
                    placeholderTextColor="black"
                    style={styles.input}
                />
                
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('App')} >
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