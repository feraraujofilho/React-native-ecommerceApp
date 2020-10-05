import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ShopScreen from '../screens/ShopScreen';
import { Ionicons } from "@expo/vector-icons"
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/headerButton";



const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Shop">
            <Drawer.Screen name="Shop" component={ShopScreen} />
            <Drawer.Screen name="Cart" component={CartScreen} />
            <Drawer.Screen name="Orders" component={OrdersScreen} />
        </Drawer.Navigator>
    );
}