import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './home-screen';
import ShoesScreen from './components/shoes-screen';
import TechnologyScreen from './components/technology-screen';
import ShoppingCarIcon from './components/shoping-car-icon';

export const AppStackNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Shoes: {screen:ShoesScreen},
    Tecnology: {screen:TechnologyScreen}
}, {
    initialRouteName: 'Home' ,
    navigationOptions: {
        headerTitle: 'My Store',
        headerRight: (
            <ShoppingCarIcon />
        )
    }
}
);