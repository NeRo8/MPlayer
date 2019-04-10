import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import PlayList from './screens/PlayList';

import color from './constants/colors';

const MainNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    PlayList: { screen: PlayList }
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
      style: {
        height: 40,
        backgroundColor: color.PURPUR
      },
      labelStyle: {
        fontSize: 12,
        fontWeight: '500'
      }
    }
  }
);

export default createAppContainer(MainNavigator);
