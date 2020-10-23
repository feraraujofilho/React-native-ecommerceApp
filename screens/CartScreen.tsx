import { NavigationProp } from '@react-navigation/native'
import { Button } from 'native-base'
import React, { FC } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem/CartItem'
import ParagraphText from '../components/ParagraphText'
import { calculateTotalQuantity } from '../services/helpers'
import { removeFromCart } from '../store/cart/actions'
import StateInterface from '../store/statetypes'
import ProductProps from '../types/ProductProps'

const CartScreen: FC = ({ navigation }) => {
	const cartProducts = useSelector(
		(state: StateInterface) => state.productState.cart
	)
	const allProduct = useSelector(
		(state: StateInterface) => state.productState.products
	)

	const productsInTheCart = allProduct.filter((product: ProductProps) => {
		return cartProducts.map((product) => product.id).includes(product.id)
	})

	const dispatch = useDispatch()

	const removeProductFromCart = (productId: string) => {
		dispatch(removeFromCart(productId))
	}

	const calculateTotalPrice = () => {
		return productsInTheCart
			.reduce((acc: number, val: ProductProps) => {
				const cartSingleProduct = cartProducts.find(
					(product) => product.id === val.id
				)

				return (acc += val.price * cartSingleProduct.quantity)
			}, 0)
			.toFixed(2)
	}

	const renderItem = (itemData: any) => {
		const { item } = itemData
		return <CartItem item={item} removeFunction={removeProductFromCart} />
	}

	if (productsInTheCart.length === 0) {
		return (
			<View style={styles.errorMessage}>
				<Text>No Products were added to the Cart</Text>
			</View>
		)
	}

	return (
		<ScrollView>
			<FlatList
				data={productsInTheCart}
				renderItem={(itemData) => renderItem(itemData)}
			/>
			<View style={styles.overviewContainer}>
				<View
					style={{
						...styles.sumupValuesBox,
						marginVertical: 5,
					}}
				>
					<ParagraphText>Product Quantity</ParagraphText>
					<ParagraphText>{calculateTotalQuantity(cartProducts)}</ParagraphText>
				</View>
				<View style={styles.sumupValuesBox}>
					<ParagraphText>Products Price</ParagraphText>
					<ParagraphText>$ {calculateTotalPrice()}</ParagraphText>
				</View>
				<View style={styles.line} />
				<View style={styles.sumupValuesBox}>
					<Text style={{ fontSize: 20, fontFamily: 'Roboto_medium' }}>
						Total
					</Text>
					<Text style={{ fontSize: 20 }}>$ {calculateTotalPrice()}</Text>
				</View>
			</View>
			<Button
				rounded
				style={styles.button}
				onPress={() => {
					navigation.navigate('PaymentConfirmation')
				}}
			>
				<Text style={styles.actionButton}>Buy Now</Text>
			</Button>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	line: {
		backgroundColor: '#ccc',
		height: 0.8,
		width: '100%',
		alignSelf: 'center',
		marginVertical: 25,
	},
	errorMessage: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: '#d56235',
		paddingHorizontal: 20,
		width: '90%',
		alignSelf: 'center',
	},
	overviewContainer: {
		backgroundColor: '#f9f9fb',
		marginVertical: 20,
		marginHorizontal: 10,
		padding: 20,
		borderRadius: 20,
	},
	actionButton: {
		color: 'white',
		width: '100%',
		textAlign: 'center',
	},
	sumupValuesBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})

export default CartScreen
