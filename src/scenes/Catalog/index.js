import React, { Component } from 'react';
import {Platform, ScrollView, Text, SectionList, StyleSheet } from 'react-native';
import ItemProduct from './components/item-product';
import ItemSeparator from './components/item-separator';
import httpProducts from '../../services/Products/http-products';

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

    navigatorButtons= {
        rightButtons: [
          {
            icon: require('../../img/cart.png'),
            id: 'cart',
            title: 'Cart'
          }
        ]
      }

      async getData(){
        const data = await httpProducts.getProducts();
        console.log('getData:::::');
        console.log(data);
        await this.setState({
          productList: data 
        });
      }

    renderItem = ({ item }) => <ItemProduct navigation={this.props.navigation} product={item} />
    itemSeparator = ({ item }) => <ItemSeparator navigation={this.props.navigation} product={item} />
    keyExtractor = (item) => item._id.toString()
    render() {
        return (
            <ScrollView>
                <SectionList
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.itemSeparator}
                    sections={[
                        {
                            data: this.state.productList
                        }
                    ]}
                    keyExtractor={this.keyExtractor}
                />
            </ScrollView>
        );
    }

}

export default Catalog;