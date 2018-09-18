import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ItemProduct = (props) => (
    <TouchableHighlight
        onPress={() => {props.navigation.navigate('ProductDetailScreen', { _id: props.product._id })}}
        underlayColor="#C0C0C0"
    >
        <View>
            <View style={styles.container}>
                <Image source={{ uri: props.product.avatar }} style={styles.productImage}/>
                <Text style={styles.productName}>{props.product.name}</Text>
                <View style={styles.productFooter}>
                <Text style={styles.productPrice}>${props.product.price}</Text>
                    <Image style={styles.productFavorite} 
                    source={(props.product.favorite == 'true') ? 
                    require('../../../img/heart_filled.png') :
                    require('../../../img/heart.png') }/>
                </View>
            </View>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 250,
        alignContent: 'space-around',
        backgroundColor: '#fff',
        marginBottom: 2,
    },
    productName: {
        backgroundColor: '#fff',
        fontSize: 20,
        flex: 1
    },
    productImage: {
        flex: 3,
        marginTop: 10,
        width: 190,
        alignSelf: 'center',
    },
    productFooter: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between',
        padding: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    productFavorite: {
        width: 16,
        height: 16,
    }
});

export default ItemProduct;

