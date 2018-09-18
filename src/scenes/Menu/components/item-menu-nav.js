import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import itemMenuNavStyle from './styles/item-menu-nav-style';
const ItemMenuNav = props => (
    <TouchableHighlight
        onPress={() => {console.log(props.goTo);props.navigation.navigate(props.goTo)}}
        underlayColor="#198e97"
    >
    <View style={itemMenuNavStyle.container}>
            <View style={itemMenuNavStyle.iconContent}>
                <Icon name={props.icon} size={24} color="#999" />
            </View>
            <View style={itemMenuNavStyle.textContent}>
                <Text style={itemMenuNavStyle.itemText}>{props.text}</Text>
            </View>
        </View>
    </TouchableHighlight>
);

export default ItemMenuNav;

