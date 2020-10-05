import React from "react"
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/headerButton";
import CartScreen from "../screens/CartScreen";
import CustomerInfoScreen from "../screens/CustomerInfoScreen";
import OrdersScreen from "../screens/OrdersScreen";
import PaymentConfirmationScreen from "../screens/PaymentConfirmationScreen";
import ProductScreen from "../screens/ProductScreen";
import UserProductsScreen from "../screens/UserProductsScreen";
import UserSingleProductScreen from "../screens/UserSingleProductScreen";
import DrawerNavigation from "./drawerNavigation";

const Stack = createStackNavigator()

const MainNavigator = () => {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Shop" component={DrawerNavigation} options={({ navigation }) => ({
                headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                    <Item title="Menu" iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Item>
                </HeaderButtons>,
                headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                    <Item title="Cart" iconName="ios-cart" onPress={() => navigation.navigate("Cart")}></Item>
                </HeaderButtons>
            })} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="CustomerInfo" component={CustomerInfoScreen} />
            <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmationScreen} />
            <Stack.Screen name="UserProducts" component={UserProductsScreen} />
            <Stack.Screen name="UserSingleProduct" component={UserSingleProductScreen} />
            <Stack.Screen name="Orders" component={OrdersScreen} />
        </Stack.Navigator>
    </NavigationContainer>)
}

export default MainNavigator