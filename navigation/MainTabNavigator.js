import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScr from '../screens/HomeScreen';
import ExploreScr from '../screens/ExploreScreen';
import AccountScr from '../screens/AccountScreen';
import { tsNonNullExpression } from '@babel/types';

const HomeStack = createStackNavigator({
  Home: HomeScr,
}, {
  navigationOptions: {
    header: null,
    title: 'Home',
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      iconName = Platform.OS === 'ios' ? `ios-home` : 'md-home';
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  },
},);

const AccountStack = createStackNavigator({
  Account: AccountScr,
}, {
  navigationOptions: {
    header: null,
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      let iconName;
      iconName = Platform.OS === 'ios' ? `ios-happy` : 'md-happy';
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  },
},);

const ExploreStack = createStackNavigator({
  Explore: ExploreScr,
},  {
  navigationOptions: {
    header: null,
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      let iconName;
      iconName = Platform.OS === 'ios' ? `ios-search` : 'md-search';
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  },
},);

export default createAppContainer(createBottomTabNavigator({
  Home: HomeStack,
  Explore: ExploreStack,
  Account: AccountStack,
}, {
  defaultNavigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
 },
));
