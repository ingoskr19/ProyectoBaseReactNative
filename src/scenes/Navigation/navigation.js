import React from 'react';
import {StackNavigator, DrawerNavigator, createSwitchNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

import BagFul from './../BagFul';
import ShoppingResult from './../ShoppingResult';
import PurchaseSummary from './../PurchaseSummary';
import ProductDetail from './../ProductDetail';
import Catalog from './../Catalog';
import Categories from './../Categories';
import Profile from './../Profile';
import Contacts from './../Contacts';
import Diary from './../Diary';

import Tab1 from './../BagFul/components/tab1';
import Tab2 from './../BagFul/components/tab2';
import Tab3 from './../BagFul/components/tab3';
import SideMenu from './../Menu/side-menu';
import Auth from '../login/auth';
import AuthLoading from '../login/auth-loading';
import Player from '../Player';
import { Localization } from '../geolocalization';

 const ProfileNavigator = StackNavigator({
  CategoriesScreen: {
    screen: Categories,
    navigationOptions: () => ({
      title: 'Categories'
    })
  },
  ProfileScreen: {
    screen: Profile,
    navigationOptions: () => ({
      title: 'Profile'
    })
  },
  ContactsScreen: {
    screen: Contacts,
    navigationOptions: () => ({
      title: 'Contacts'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  },
  DiaryScreen: {
    screen: Diary,
    navigationOptions: () => ({
      title: 'Diary'
    })
  },
  PlayerScreen: {
    screen: Player,
    navigationOptions: () => ({
      title: 'Player'
    })
  },
  LocalizationScreen: {
    screen: Localization,
    navigationOptions: () => ({
      title: 'Localization'
    })
  }
}, {
  initialRouteName: 'PlayerScreen',
  headerStyle: {
    backgroundColor: '#7B1FA2',
    borderBottomColor: '#7B1FA2'
  },
  headerTitleStyle: {
    fontSize: 18,
  },
  headerTintColor: '#7B1FA2',
});

 const BagFulNavigator = StackNavigator({
  BagFulScreen: {
    screen: BagFul,
    navigationOptions: () => ({
      title: 'BagFul'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  }
}, {
  initialRouteName: 'CategoriesScreen',
  headerStyle: {
    backgroundColor: '#7B1FA2',
    borderBottomColor: '#7B1FA2'
  },
  headerTitleStyle: {
    fontSize: 18,
  },
  headerTintColor: '#7B1FA2',
});

 const ProductsNavigator = StackNavigator({
  CategoriesScreen: {
    screen: Categories,
    navigationOptions: () => ({
      title: 'Categories'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  },
  CatalogScreen: {
    screen: Catalog,
    navigationOptions: () => ({
      title: 'Catalog'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  },

  ProductDetailScreen: {
    screen: ProductDetail,
    navigationOptions: () => ({
      title: 'Product Detail'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  },

  PurchaseSummaryScreen: {
    screen: PurchaseSummary,
    navigationOptions: () => ({
      title: 'Summary'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  },

  ShoppingResultScreen: {
    screen: ShoppingResult,
    navigationOptions: () => ({
      title: 'Shopping Result'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  }

},
  {
    initialRouteName: 'CategoriesScreen',
    headerStyle: {
      backgroundColor: '#7B1FA2',
      borderBottomColor: '#7B1FA2'
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    headerTintColor: '#7B1FA2',
  }
);

const iconTab1 = (<Icon name="anchor" size={24} color="#999" />)
 const Tabs = createBottomTabNavigator({
    Tab1: {
      screen: Tab1,
      navigationOptions: {
        title: 'T1',
        tabBarIcon: iconTab1
      }
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        title: 'T2'
      }
    },
    Tab3: {
      screen: Tab3,
      navigationOptions: {
        title: 'T3'
      }
    },
}, {
  order: ['Tab1','Tab2','Tab3'],
  initialRouteName: 'Tab2',
  tabBarOptions: {
    activeTintColor: '#c0c0c0',
    labelStyle: {
      fontSize: 15
    },
    style: {
      backgroundColor: 'black'
    }
  }
});

const Drawer = DrawerNavigator({
    Products: { screen: ProductsNavigator},
    BagFul: { screen: Catalog},
    Profile: { screen: Tabs},
    Shopping: { screen: ShoppingResult}
},
{
  drawerWidth: 250,
  contentComponent: SideMenu,
  drawerLabel: 'Home'
},
);


export const Splash = createSwitchNavigator({
  Auth: Auth,
  AuthLoading: AuthLoading,
  App: Drawer,
  Profile: ProfileNavigator
},{
  initialRouteName: 'AuthLoading',
});