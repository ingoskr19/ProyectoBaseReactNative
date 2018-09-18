import React, { Component } from 'react';
import {
  Platform,
  ToastAndroid
} from 'react-native';
import { Drawer } from './src/scenes/Navigation/navigation';

//import AppNavigator from './navigation';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Drawer/>
    );
  }
}