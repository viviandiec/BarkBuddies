import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class DogInfoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: "",
            breed: ""
        }
    }

    validName() {
        return (this.state.name.length > 0)
    }

    validAge() {
        var re = /^[0-9\b]+$/
        return (re.test(this.state.age))
    }

    validBreed() {
        return (this.state.breed.length > 0)
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

                <View>
                    {this.validName() ? (<Icon name={'ios-checkmark-circle'} size={28} style={styles.inputIcon}></Icon>) : null}

                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="black"
                        style={styles.input}
                        onChangeText={name => this.setState({name})}
                    />
                </View>

                <View>
                    {this.validAge() ? (<Icon name={'ios-checkmark-circle'} size={28} style={styles.inputIcon}></Icon>) : null}

                    <TextInput
                        placeholder="Age"
                        placeholderTextColor="black"
                        style={styles.input}
                        onChangeText={age => this.setState({age})}
                    />
                </View>

                <View>
                    {this.validBreed() ? (<Icon name={'ios-checkmark-circle'} size={28} style={styles.inputIcon}></Icon>) : null}

                    <TextInput
                        placeholder="Breed"
                        placeholderTextColor="black"
                        style={styles.input}
                        onChangeText={breed => this.setState({breed})}
                    />
                </View>

                
                <TouchableOpacity 
                    style={(!this.validName() || !this.validAge() || !this.validBreed()) ? styles.buttonContainerDisabled : styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('App')} 
                    disabled={!this.validName() || !this.validAge() || !this.validBreed()}>
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
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
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