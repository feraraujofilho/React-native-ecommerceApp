import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CartScreen from '../screens/CartScreen'
import OrdersScreen from '../screens/OrdersScreen'
import ShopScreen from '../screens/ShopScreen'
import UserProductsScreen from '../screens/UserProductsScreen'

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Shop" component={ShopScreen} />
			<Drawer.Screen name="Cart" component={CartScreen} />
			<Drawer.Screen name="Orders" component={OrdersScreen} />
			{/*  <Drawer.Screen name="Manage my Products" component={UserProductsScreen} /> */}
		</Drawer.Navigator>
	)
}
