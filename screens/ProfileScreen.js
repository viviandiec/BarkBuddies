import React from 'react';
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen(props) {
  return (
    <View style={{ paddingTop: 120, flex: 1, paddingBottom: 32 }}>
      <View style={{ alignItems: 'center' }}>
        <View>
          <Image
            style={{ width: 128, height: 128, borderRadius: 64 }}
            source={require("../assets/images/doggos/pic_tofu.jpg")}
          />
          <Image
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              position: 'absolute',
              right: -24,
              bottom: -16,
              borderWidth: 6,
              borderColor: '#edfcff'
            }}
            source={require("../assets/images/users/viv.jpeg")}
          />
        </View>
        <Text style={{ fontSize: 28, fontWeight: 'bold', padding: 16 }}>
          Doodles & Jen
        </Text>
        <View style={{ flexDirection: 'row', paddingTop: 32 }}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => props.navigation.navigate('EditProfile')}
            >
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
                color="white"
                size={32}
                style={{ paddingTop: 8 }}
              />
            </TouchableOpacity>
            <Text style={styles.iconLabel}>Edit User Profile</Text>
          </View>
          <View style={{ width: 90 }} />
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => props.navigation.navigate('EditDogProfile')}
            >
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-paw' : 'md-paw'}
                color="white"
                size={32}
                style={{ paddingTop: 8 }}
              />
            </TouchableOpacity>
            <Text style={styles.iconLabel}>Edit Dog Profile</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#b5d4d8',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  iconLabel: { color: '#444', paddingTop: 10 },
  buttonContainer: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#4db8c7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 200
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

ProfileScreen.navigationOptions = {
  header: null
};
