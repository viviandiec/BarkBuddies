import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { selectAssetSource } from 'expo-asset/build/AssetSources';

class DogInfoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: undefined
        }
    }

    static navigationOptions = {
        title: 'Describe your dog!',
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
                    <Text>Upload a picture of your dog!</Text>
                </View>

                <TextInput
                    placeholder="Name"
                    placeholderTextColor="black"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Age"
                    placeholderTextColor="black"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Breed"
                    placeholderTextColor="black"
                    style={styles.input}
                />
                
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('App')} >
                    <Text style={styles.buttonText}>FINISH PROFILE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default DogInfoScreen;

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