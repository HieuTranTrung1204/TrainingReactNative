import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './home';
import People from './people';

export default Router = {
  Home: { 
      screen: Home 
  },
  People: { 
      screen: People 
    },
};

