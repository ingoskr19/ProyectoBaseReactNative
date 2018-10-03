import React, { Component } from 'react';
import {
  Platform,
  ToastAndroid
} from 'react-native';
import { Splash } from './src/scenes/Navigation/navigation';
import RNLanguage from 'react-native-languages';
import i18n from './src/i18n';
//import AppNavigator from './navigation';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    RNLanguage.addEventListener('change',this.onChangeLanguage)
  }

  componentWillUnmount(){
    RNLanguage.removeEventListener('change',this.onChangeLanguage)
  }

  onChangeLanguage = ({language}) => {
    i18n.locale=language;
  }

  render() {
    return (
      <Splash/>
    );
  }
}