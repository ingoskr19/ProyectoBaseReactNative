import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ItemSeparator = () => (
    <View style={styles.separator}>
    </View>
);

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#C0C0C0',
        marginVertical: 3,
    }
});

export default ItemSeparator;
