import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ShopScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import CustomerInfoScreen from './screens/CustomerInfoScreen';
import PaymentConfirmationScreen from './screens/PaymentConfirmationScreen';
import UserProductsScreen from './screens/UserProductsScreen';
import UserSingleProductScreen from './screens/UserSingleProductScreen';
import OrdersScreen from './screens/OrdersScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Shop" component={ShopScreen} options={{ title: "Home" }} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="CustomerInfo" component={CustomerInfoScreen} />
          <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmationScreen} />
          <Stack.Screen name="UserProducts" component={UserProductsScreen} />
          <Stack.Screen name="UserSingleProduct" component={UserSingleProductScreen} />
          <Stack.Screen name="Orders" component={OrdersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
