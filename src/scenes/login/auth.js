import React, { Component } from 'react';
import { 
    View, 
    Button, 
    StyleSheet, 
    AsyncStorage, 
    TextInput, 
    Text } from 'react-native';

import HttpUser from './../../services/Users/http-users';
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        email: '',
        password: ''
    });
  }

  login = async () => {
      const config = {
      params: {
          'email':this.state.email,
          'password':this.state.password
      }
    }
    await AsyncStorage.setItem('email',this.email);
    const token = await HttpUser.getLogin(config);
    await AsyncStorage.setItem('token',token);
    this.props.navigation.navigate('App');
  }

  onChangeText = (_input,text) => {
    if(_input === 'email'){
            this.setState({
                'email': text
            });
    } else if(_input === 'password'){
            this.setState({
                'password': text
            });
    }
  }
  render() {
    return (
      <View style ={styles.container}>
        <Text style={styles.formLabel}> Email </Text>
        <TextInput
            placeholder="Email"
            style={styles.formInput}
            value={this.state.email}
            onChangeText={(text)=>this.onChangeText('email',text)}
        />
        <Text style={styles.formLabel}> Password </Text>
        <TextInput
            placeholder="Password"
            style={styles.formInput}
            value={this.state.password}
            onChangeText={(text)=>this.onChangeText('password',text)}
        />
        <Button style ={styles.login}
            title="Login"
            onPress={this.login}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formLabel:{
        color: '#198e97'
    },
    formInput:{
        width: 250
    },
    login: {

    }
    
});

export default Auth;
