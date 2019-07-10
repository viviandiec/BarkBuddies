
import React from 'react';
import { doggoImages, userImages } from '../constants/Data';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <Image
                style={styles.doggoImage}
                source={this.getImage(props.index, "doggo")}
            />
            <Image
                style={styles.userImage}
                source={this.getImage(props.index, "")}
            />
            <Text style={styles.name}>{props.card.doggoName}</Text>
            <Text style={styles.description}>{props.card.description}</Text>
            <Ionicons
                style={styles.infoIcon}
                size={50}
                name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
                color={"#494848"}
            />
        </View>
    );
}

getImage = (num, type) => {
    if (type == "doggo") {
        return doggoImages[num];
    }
    return userImages[num];
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        backgroundColor: 'white',
    },
    name: {
        marginHorizontal: 15,
        fontSize: 45,
        backgroundColor: 'transparent'
    },
    description: {
        marginHorizontal: 15,
        fontSize: 15,
        color: "#404040"
    },
    doggoImage: {
        width: 300,
        height: 300,
        marginTop: 10,
        alignSelf: "center"
    },
    userImage: {
        width: 100,
        height: 100,
        position: "absolute",
        right: 20,
        top: 260,
        borderRadius: 50,
        borderColor: "#F6967D",
        borderWidth: 4,
    },
    infoIcon: {
        position: "absolute",
        right: 20,
        top: 440,
    },
});
