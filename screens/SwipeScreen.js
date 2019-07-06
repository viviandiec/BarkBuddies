import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import Swiper from 'react-native-deck-swiper'

// const Swipers = require('react-native-deck-swiper');
// import {Swiper} from Swipers;
    
class SwipeScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                    <Button
                        onPress={() => { 
                            <Swiper
                            cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
                            renderCard={(card) => {
                                return (
                                    <View style={styles.card}>
                                        <Text style={styles.text}>{card}</Text>
                                    </View>
                                )
                            }}>
                        </Swiper>
                        && console.log("kms")

                         }}
                        title="Press me">
                        You can press me
                    </Button>
            </ScrollView>
        );
    }
}

SwipeScreen.navigationOptions = {
    title: 'Swipe',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    },
});

export default SwipeScreen;