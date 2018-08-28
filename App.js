import React, { Component } from 'react';
import {
  Platform,
  ToastAndroid
} from 'react-native';

import Profile from './src/scenes/Profile';
import Contacts from './src/scenes/Contacts';

import { StackNavigator } from 'react-navigation';
import Diary from './src/scenes/Diary';

const AppNavigator = StackNavigator({
  ProfileScreen: {
    screen: Profile,
    navigationOptions: () => ({
      title: 'Profile'
    })
  },
  ContactsScreen: {
    screen: Contacts,
    navigationOptions: () => ({
      title: 'Contacts'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  },
  DiaryScreen: {
    screen: Diary,
    navigationOptions: () => ({
      title: 'Diary'
    })
  }
},
  {
    initialRouteName: 'DiaryScreen',
    headerStyle: {
      backgroundColor: '#7B1FA2',
      borderBottomColor: '#7B1FA2'
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    headerTintColor: '#7B1FA2',
  }
);

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}