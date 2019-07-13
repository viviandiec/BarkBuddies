import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')
class SignInScreen extends React.Component {
    static navigationOptions = {
        // title: 'BARK BUDDIES',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/icon.png')}
                    />
                </View>

                <View>
                    <Icon name={'ios-person'} size={28} style={styles.inputIcon}>
                    </Icon>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="black"
                        style={styles.input}
                    />
                </View>

                <View>
                    <Icon name={'ios-lock'} size={28} style={styles.inputIcon}>
                    </Icon>

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        style={styles.input}
                    />
                    
                    <TouchableOpacity style={styles.btnEye}>
                        <Icon name={'ios-eye'} size={26}>
                        </Icon>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('App')} >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <Button
                    title="Don't have an account? Sign up" onPress={() => this.props.navigation.navigate('UserInfo')}
                />


            </View>
        );
    }
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingHorizontal: 30
    },
    input: {
        height: 55,
        marginBottom: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 45,
        borderColor: '#fff',
        color: 'rgba(255, 255, 255, 0.7)'
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 15,
        zIndex: 1,
        opacity: 0.5
    },
    btnEye: {
        position: 'absolute',
        top: 14,
        right: 25,
        zIndex: 1,
        opacity: 0.5
    },
    buttonContainer: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        //backgroundColor:'#00BCD4',
        backgroundColor: '#ffcb0c',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    },
    logoContainer: {
        paddingTop: 100,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 30

    },
    logo: {
        width: 120,
        height: 120,
        paddingVertical: 30
    }
});