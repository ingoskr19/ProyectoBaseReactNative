import React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Left, Right, Content, Card, CardItem, Text, Icon} from 'native-base';
import Button from '../../Camera/components/button-component';
renderImage = (image) => {
    if (image != "" && image != null) {
        return (
            <Left>
                <Image source={{ uri: image }} style={styles.productImage} />
            </Left>
        );
    } else {
            <Left>
                <Image source={require('./../../../../assets/images/NoImage.png')} style={styles.productImage} />
            </Left>
    }
}
const ItemProduct = (props) => {
    return (
        <Content style={styles.container}>
            <Card>
                <CardItem header>
                    <Text style={styles.productName}>{props.product.name}</Text>
                </CardItem>
                <TouchableHighlight onPress={() => props.navigation.navigate('ProductDetailScreen', { product: props.product })}
                    underlayColor='#626663'>
                    <CardItem>
                        {renderImage(props.product.avatar)}
                        <Text>{props.product.description}</Text>
                    </CardItem>
                </TouchableHighlight>
                <CardItem footer>
                    <Left>
                        <Text style={styles.productPrice}>${props.product.price}</Text>
                    </Left>
                    <Right>
                    <TouchableHighlight onPress={()=>props.favoritePress(props.product)}>
                        { (props.product.favorite) ? 
                            <Icon name='ios-hand'></Icon>
                            :
                            <Icon name='heart' size={16}></Icon>
                        }
                    </TouchableHighlight>
                    </Right>
                </CardItem>
            </Card>
        </Content>
    );
};

const styles = StyleSheet.create({
    container:{
        padding: 0
    },
    productName: {
        backgroundColor: '#fff',
        fontSize: 12,
    },
    productImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'red'
    },
    bodyContent: {
        flexDirection: 'row',
    },
    productDescription: {
        fontSize: 12,
        textAlign: 'justify'
    },
    productPrice: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    productFavorite: {
        width: 16,
        height: 16,
    }
});

export default ItemProduct;

