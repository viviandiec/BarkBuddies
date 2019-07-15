import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SwipeScreen from '../screens/SwipeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';
import DescriptionScreen from '../screens/DescriptionScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const HomeStack = createStackNavigator({
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => ( <
        TabBarIcon focused = { focused }
        name = {
            Platform.OS === 'ios' ?
            `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'
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
    tabBarIcon: ({ focused }) => ( <
        TabBarIcon focused = { focused }
        name = { Platform.OS === 'ios' ? 'ios-link' : 'md-link' }
        />
    ),
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
    MessagesStack,
});

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
