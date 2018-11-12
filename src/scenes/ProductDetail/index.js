import React, { Component } from 'react';
import { Platform, ScrollView, Text, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../NativeBase/components/header';
import ShoppingCarIcon from '../Components/Header/shoping-car-icon';
import { Container, Content, Body, Icon, View } from 'native-base';
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.navigation.getParam('product', null),
        };
    }

    getName() {
        return this.state.product.name;
    }
    static navigationOptions = ({ navigation }) => ({
        header: (props) => {
            return (
                <HeaderComponent title={navigation.getParam('product', [{ name: '' }]).name} navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                >
                    <ShoppingCarIcon />
                </HeaderComponent>
            )
        }
    });
    render() {
        return (
            <Container>
                <Content>
                    <Body>
                        <View style={styles.imageContent}>
                            <Image style={styles.image} source={{ uri: this.state.product.avatar }} />
                            <View style={styles.icon}>
                                    <Icon name='heart' size={24}/>
                            </View>
                        </View>
                        <ScrollView>
                            <Content>
                                <Text>{this.state.product.name}</Text>
                                <Text>{this.state.product.price}</Text>
                                <Content>
                                    <Text>{this.state.product.description}</Text>
                                </Content>
                            </Content>
                        </ScrollView>
                    </Body>
                </Content>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    imageContent: {
        //paddingBottom: '56.25%',
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    image: {
        width: 150,
        height: 150,
        flex: 1,
        resizeMode: 'contain',
        borderColor: 'red',
    },
    icon: {
        position: 'absolute',
        zIndex: 1000,
        bottom: -16,
        right: 20,
        color: '#cd09d1',
        width: 32,
        height: 32,
        borderRadius: 16,
        borderColor: '#c0c0c0',
        padding: 2,
        borderWidth: 2,
    }
});

export default ProductDetail;