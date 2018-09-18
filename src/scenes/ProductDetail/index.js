import React, { Component } from 'react';
import {Platform, View, Text } from 'react-native';
import httpProducts from '../../services/Products/http-products';
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
        };
    }

    componentDidMount = () => {
        //this.getData(this.props.navigation.getParam('_id', ''))
    }

    async getData(id){
        const data = await httpProducts.getProductById(id);
        console.log('getProductAwait');
        console.log(data);
        await this.setState({
          product: data 
        });
    }
    render() {
        return (
            <View>
                <Text>ProductDetail</Text>
            </View>
        );
    }

}

export default ProductDetail;