import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpScreenName from '../screens/SignUpScreenName';
import DogInfoScreen from '../screens/DogInfoScreen';
import PictureScreen from '../screens/PictureScreen';


const SignUpStack = createStackNavigator({
  SignIn: SignInScreen,
  UserInfo: SignUpScreen,
  UserInfoName: SignUpScreenName,
  DogInfo: DogInfoScreen,
  Images: PictureScreen
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    App: MainTabNavigator,
    Other: SignUpStack
  },
    {
      initialRouteName: 'Other',
    })
);
