import React from 'react';
import { Header, Body, Title, Left } from 'native-base'
import BackButton from './components/back-button';
import HomeButton from './components/home-button';
const HeaderComponent = (props) => {
    return (
    <Header>
        <Left>
            {(props.hasBackButton) ? <BackButton navigation={props.navigation}/> : <HomeButton navigation={props.navigation}/>}
        </Left>
        <Body>
            <Title>{props.title}</Title>
        </Body>
    </Header>
    );
};

export default HeaderComponent;
