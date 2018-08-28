import React, { Component } from 'react';
import {
    Platform,
    ToastAndroid,
    View
  } from 'react-native';

import ProfileOverview from './components/profile-overview';
import FollowOverview from './components/follow-overview';
import FormOverview from './components/form-overview';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }

    componentDidMount() {
        const profile = {
            name: 'Oscar Vergara',
            location: 'Monteria, Córdoba',
            uri: 'https://carfromjapan.com/wp-content/uploads/2018/05/bmw.jpg',
            followers: 253,
            following: 4323,
            phone: '+573126209223',
            twitters: '@oscar_vergara'
        };
        this.setState({
            profile
        });
    }


    showAlert() {
        ToastAndroid.showWithGravity(
            'All Your Base Are Belong To Us',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        ToastAndroid.showWithGravityAndOffset(
            'A wild toast appeared!',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    }

    onChangeText = text => {
        this.setState({ ...this.state.profile, name: text });
    }

    static navigationOptions = {
        title: 'View Profile',
    }

    render() {
        return (
            <View>
                <ProfileOverview profile={this.state.profile} />

                <FollowOverview following={this.state.profile.following} followers={this.state.profile.followers} />

                <FormOverview
                    onPress={this.showAlert}
                    profile={this.state.profile}
                    onChangeText={this.onChangeText}
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}

export default Profile;

