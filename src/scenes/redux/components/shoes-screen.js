import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ProductList from './product-list';
import {SHOES} from './../data';
import {connect} from 'react-redux';

class ShoesScreen extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <ProductList onPressEvent={ this.props.addItemToCart} onLongPressEvent={ this.props.removeItemFromCart} products={ SHOES }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapDispatchToProps = (dispatch) =>  {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
        removeItemFromCart: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(ShoesScreen);