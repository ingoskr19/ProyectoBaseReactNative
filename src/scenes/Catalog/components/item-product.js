import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Left, Right, Content, Textarea, Card, CardItem, Body, Text, Container, Item } from 'native-base';
renderImage = (image) => {
    if (image != "" && image != null) {
        return (<Image source={{ uri: image }} style={styles.productImage} />);
    } else {
        <Image source={require('./../../../../assets/images/NoImage.png')} style={styles.productImage} />
    }
}

onPress = (props) => {
    console.log("eentro aqui::");
    console.log(props.product);
    props.navigation.navigate('ProductDetailScreen', { _id: props.product._id });
}
const ItemProduct = (props) => {
    return (
        <Content>
            <Card>
                <CardItem header>
                    <Text style={styles.productName}>{props.product.name}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <View style={styles.bodyContent}>
                            <Left>
                                {renderImage(props.product.avatar)}
                            </Left>
                            <Text style={styles.productDescription}>
                                {props.product.description}
                            </Text>
                        </View>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Left>
                        <Text style={styles.productPrice}>${props.product.price}</Text>
                    </Left>
                    <Right>
                        <Text>{props.product.favorite}</Text>
                    </Right>
                </CardItem>
            </Card>
        </Content>
    );
};

const styles = StyleSheet.create({
    productName: {
        backgroundColor: '#fff',
        fontSize: 12,
    },
    productImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
    bodyContent: {
        flexDirection: 'row',
    },
    productDescription: {
        fontSize: 12
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

