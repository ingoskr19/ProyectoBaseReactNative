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
    this.init();
  }

  async init (){
    const _email = await AsyncStorage.getItem('email');
    if(_email){
        this.setState({
            email: _email
        });
    }
  }

  login = async () => {
      const config = {
      params: {
          'email':this.state.email,
          'password':this.state.password
      }
    }
    const token = await HttpUser.getLogin(config);
    await AsyncStorage.setItem('token',token);
    await AsyncStorage.setItem('email',this.state.email);
    this.props.navigation.navigate('App');
  }
  render() {
    return (
      <View style ={styles.container}>
        <Text style={styles.formLabel}> Email </Text>
        <TextInput
            placeholder="Email"
            style={styles.formInput}
            value={this.state.email}
            onChangeText={(text)=>this.setState({email:text})}
        />
        <Text style={styles.formLabel}> Password </Text>
        <TextInput
            placeholder="Password"
            style={styles.formInput}
            value={this.state.password}
            onChangeText={(text)=>this.setState({password:text})}
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
