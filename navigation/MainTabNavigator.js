import React from 'react';
import { Platform, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SwipeScreen from '../screens/SwipeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';
import DescriptionScreen from '../screens/DescriptionScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const HomeStack = createStackNavigator({
        Home: HomeScreen,
        EditProfile: EditProfileScreen
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => ( <
        TabBarIcon focused = { focused }
        name = {
            Platform.OS === 'ios' ?
            `ios-home${focused ? '' : '-outline'}` : 'md-home'
        }
        />
    ),
};

HomeStack.path = '';

const SwipeStack = createStackNavigator({
        Swipe: SwipeScreen,
        Desc: DescriptionScreen,
    },
    config
);

SwipeStack.navigationOptions = {
  tabBarLabel: 'Swipe',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/icon.png')}
      style={{
        opacity: focused ? 1 : 0.2,
        transform: [{ scaleX: 0.1 }, { scaleY: 0.1 }]
      }}
    />
  )
};

SwipeStack.path = '';

const MessagesStack = createStackNavigator({
        Messages: MessagesScreen,
        Chat: ChatScreen
    },
    config
);

MessagesStack.navigationOptions = {
    tabBarLabel: 'Messages',
    tabBarIcon: ({ focused }) => ( <
        TabBarIcon focused = { focused }
        name = { Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes' }
        />
    ),
};

MessagesStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    SwipeStack,
    MessagesStack
  },
  {
    initialRouteName: "SwipeStack"
  }
);

tabNavigator.path = '';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    // customIcon1: {
    //     maskPosition: '50% 50%',
    //     width: 1,
    //     height: 1,
    //     maskImage: require('../assets/images/icon.png'),
    // },
});

export default tabNavigator;
