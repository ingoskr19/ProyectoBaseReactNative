import React, { Component } from 'react';
import {Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import ItemProduct from './components/item-product';
import httpProducts from '../../services/Products/http-products';
import { List, ListItem, Left, Right, Content, Textarea, Card, CardItem, Body, Icon } from 'native-base';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
        };
    }

    componentDidMount = () => {
        this.getData()
    }

    navigatorButtons = {
        rightButtons: [
            {
                icon: require('../../img/cart.png'),
                id: 'cart',
                title: 'Cart'
            }
        ]
    }

    async getData() {
        const data = await httpProducts.getProducts();
        await this.setState({
            productList: data
        });
    }
    render() {
        if (this.state.productList.length>0) {
        return (
            <List
                dataArray={this.state.productList}
                renderRow={item => {
                    return (
                        <ListItem>
                            {this.itemProduct(item)}
                            <ItemProduct product={item} navigation={this.props.navigation}/>
                        </ListItem>
                    );
                }}
            />
        ) } else {
            return <ActivityIndicator size="large" color="#7efb7b" />;
        }
    }

    itemProduct = (product) => {   
        <ItemProduct product={product} navigation={this.props.navigation}/>;
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 120,
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
        width: 50,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productFavorite: {
        width: 16,
        height: 16,
    }
});

export default Catalog;