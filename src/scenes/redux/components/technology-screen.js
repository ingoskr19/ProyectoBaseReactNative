import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TECHNOLOGY } from '../data';

class TechnologyScreen extends Component {
  render() {
    return (
      <View>
        <ProductList products={ TECHNOLOGY }/>
      </View>
    )
  }
}

export default TechnologyScreen;