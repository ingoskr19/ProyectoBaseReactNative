import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.login();
  }

  async login (){
    const userToken = await AsyncStorage.getItem('token');
      setTimeout(()=>{
          this.props.navigation.navigate((userToken)?'App':'Auth');
      },2000);
      
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AuthLoading;