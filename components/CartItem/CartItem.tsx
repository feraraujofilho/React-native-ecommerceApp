import { Ionicons } from '@expo/vector-icons'
import React, { FC } from 'react'
import {
	Image,
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Colors from '../../constants/Colors'
import { decreaseQuantity, increaseQuantity } from '../../store/cart/actions'
import StateInterface from '../../store/statetypes'
import CartItemInterface from '../../types/CartItemInterface'
import ParagraphText from '../ParagraphText'
import CartItemProps from './CartItemProps'


const CartItem: FC<CartItemProps> = ({
	navigation,
	item,
	removeFunction,
	myProducts,
}) => {
	const cartItems = useSelector(
		(state: StateInterface) => state.productState.cart
	)

	const cartItem = cartItems.find(
		(cart: CartItemInterface) => cart.id === item.id
	)

	const dispatch = useDispatch()

	return (
		<View style={styles.container}>
			<View style={styles.info}>
				<Image style={styles.img} source={{ uri: item.imageUrl }} />
				<View style={{ width: '70%', height: '70%' }}>
					<ParagraphText style={styles.title}>{item.title}</ParagraphText>
					<ParagraphText style={styles.description}>
						{item.description}
					</ParagraphText>
					<ParagraphText style={styles.price}>$ {item.price}</ParagraphText>
				</View>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				{!myProducts && (
					<View style={styles.qtyContainer}>
						<Button
							color={Colors.primaryColor}
							title="-"
							onPress={() => dispatch(decreaseQuantity(cartItem.id))}
						/>
						<Text>{cartItem.quantity}</Text>
						<Button
							color={Colors.primaryColor}
							title="+"
							onPress={() => dispatch(increaseQuantity(cartItem.id))}
						/>
					</View>
				)}
				{myProducts && (
					<TouchableOpacity
						style={styles.action}
						onPress={() => {
							navigation.navigate('UserSingleProduct', { productId: item.id })
						}}
					>
						<Ionicons color={Colors.accentColor} name="ios-create" size={22} />
						<ParagraphText style={{ color: Colors.accentColor }}>
							Edit
						</ParagraphText>
					</TouchableOpacity>
				)}
				<TouchableOpacity
					style={styles.action}
					onPress={() => removeFunction(item.id)}
				>
					<Ionicons color={Colors.accentColor} name="ios-trash" size={22} />
					<ParagraphText style={{ color: Colors.accentColor }}>
						Remove
					</ParagraphText>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		minHeight: 150,
		backgroundColor: 'white',
		marginVertical: 10,
		marginHorizontal: 10,
		padding: 20,
		borderRadius: 20,
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	img: {
		height: 70,
		width: 70,
	},
	title: {
		fontSize: 20,
		color: Colors.primaryColor,
		marginBottom: 3,
	},
	description: {
		color: Colors.accentColor,
		marginBottom: 8,
	},
	price: {
		fontSize: 17,
	},
	qtyContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	action: {
		flexDirection: 'row',
		width: 70,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
})

export default CartItem
