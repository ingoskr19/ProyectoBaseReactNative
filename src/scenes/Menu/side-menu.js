import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ItemMenuNav from './components/item-menu-nav';

class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            separatorList: []
        };
    }

    componentDidMount = () => {
        const items = [
            {
                goTo: 'CategoriesScreen',
                text: 'Categories',
                icon: 'home',
                iconColor: '#c0c0c0'
            },
            {
                goTo: 'Tabs',
                text: 'Tabs',
                icon: 'home',
                iconColor: '#ff24ee'
            },
            {
                goTo: 'Bagful',
                text: 'go to Cart',
                icon: 'home',
                iconColor: '#f1f1f1'
            },
        ];

        const separators = [
            {
                goTo: '',
                name: 'Juan Perez',
            },
        ];

        this.setState({
            itemList: items,
            separatorList: separators,
        });
    }

    getItem(index) {
        return (
           this.itemList[index]
        );
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView>
                    
                    <ItemMenuNav navigation={this.props.navigation} 
                    goTo="CategoriesScreen"
                    text="Products"
                    icon="home"
                    />
                    <ItemMenuNav navigation={this.props.navigation} 
                    goTo="Tabs"
                    text="Tabs"
                    icon="home"
                    />
                    <ItemMenuNav navigation={this.props.navigation} 
                    goTo="Bagful"
                    text="go to Cart"
                    icon="cart"
                    />
                    
                    {/*
                    <ItemMenuNav navigation={this.props.navigation} item={this.state.itemList(0)} />
                    */}
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Power by ETN</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#f2fff2'
    },
    footerContainer: {
        padding: 15,
        marginBottom: 20,
    },
    footerText: {
        fontSize: 18,
    }
});

export default SideMenu;
