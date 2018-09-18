import React from 'react';
import {  StyleSheet } from 'react-native';

const itemMenuNavStyle = StyleSheet.create({
    container: {
        padding: 5,
        height: 40,
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    iconContent: {
        flex: 1
    },
    textContent: {
        flex: 4,
    },
    
    itemText: {
        color: '#000'
    },

});
export default itemMenuNavStyle;
