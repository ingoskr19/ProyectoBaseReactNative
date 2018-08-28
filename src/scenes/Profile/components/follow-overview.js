import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const FollowOverview = props => (
    <View style={styles.followContainer}>
        <View style={styles.followWrapper}>
            <Text style={styles.followValue}> {props.followers} </Text>
            <Text style={styles.followTitle}> Followers </Text>
        </View >
        <View style={styles.followWrapper}>
            <Text style={styles.followValue}> {props.following} </Text>
            <Text style={styles.followTitle}> Followings </Text>
        </View >
    </View >
)

const styles = StyleSheet.create({ 
    followContainer:{
        backgroundColor:'#4527A0',
        alignItems:'center',
        flexDirection:'row'
      },
      followTitle:{
        color:'#fff',
        alignItems:'center',
        fontSize:18,
      },
      followValue:{
        color:'#fff',
        alignItems:'center',
        fontSize:24
      },
      followWrapper:{
        flex:1,
        alignItems:'center',
        padding:10
      }
});

export default FollowOverview;