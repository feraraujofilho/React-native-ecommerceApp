import React from 'react'
import { DrawerActions, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import CartScreen from '../screens/CartScreen'
import OrdersScreen from '../screens/OrdersScreen'
import PaymentConfirmationScreen from '../screens/PaymentConfirmationScreen'
import ProductScreen from '../screens/ProductScreen'
import DrawerNavigation from './drawerNavigation'
import Colors from '../constants/Colors'
import { Image } from 'react-native'

const Stack = createStackNavigator()

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Shop"
					component={DrawerNavigation}
					options={({ navigation }) => ({
						headerTitle: () => (
							<Image
								style={{ width: 100, height: 28 }}
								source={require('../assets/Logo-black.png')}
							/>
						),
						headerLeft: () => (
							<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
								<Item
									title="Menu"
									color={Colors.primaryColor}
									iconName="ios-menu"
									onPress={() =>
										navigation.dispatch(DrawerActions.toggleDrawer())
									}
								></Item>
							</HeaderButtons>
						),
						headerRight: () => (
							<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
								<Item
									title="Cart"
									color={Colors.primaryColor}
									iconName="ios-cart"
									onPress={() => navigation.navigate('Cart')}
								></Item>
							</HeaderButtons>
						),
					})}
				/>

				<Stack.Screen
					name="Product"
					component={ProductScreen}
					options={({ navigation }) => ({
						headerTransparent: true,
						headerTintColor: Colors.primaryColor,
						headerTitle: '',
						headerBackTitleVisible: false,
						headerRight: () => (
							<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
								<Item
									color={Colors.primaryColor}
									title="Cart"
									iconName="ios-cart"
									onPress={() => navigation.navigate('Cart')}
								/>
							</HeaderButtons>
						),
					})}
				/>

				<Stack.Screen
					name="Cart"
					component={CartScreen}
					options={{
						headerTintColor: Colors.primaryColor,
						headerTitle: () => (
							<Image
								style={{ width: 100, height: 28 }}
								source={require('../assets/Logo-black.png')}
							/>
						),
						headerBackTitleVisible: false,
					}}
				/>

				<Stack.Screen
					name="PaymentConfirmation"
					component={PaymentConfirmationScreen}
				/>

				<Stack.Screen name="Orders" component={OrdersScreen} />

				{/* <Stack.Screen name="UserProducts" component={UserProductsScreen} />

				<Stack.Screen
					name="UserSingleProduct"
					options={({ navigation, route }) => ({
						headerTintColor: Colors.primaryColor,
						headerBackTitleVisible: false,
						headerTitle: () => (
							<ParagraphText>
								{route.params?.productId ? 'Edit Product' : 'Add Product'}
							</ParagraphText>
						),
						headerRight: () => (
							<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
								<Item
									title="Save"
									iconName={
										Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
									}
									onPress={route.params?.submit}
								/>
							</HeaderButtons>
						),
					})}
					component={UserSingleProductScreen}
				/> */}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default MainNavigator
