import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import ProductProps from '../types/ProductProps'
import { useDispatch, useSelector } from 'react-redux'
import StateInterface from '../store/statetypes'
import { addToCart } from '../store/cart/actions'
import { Button } from 'native-base'
import ParagraphText from '../components/ParagraphText'
import Colors from '../constants/Colors'

interface ProductScreenProps {
	navigation: StackNavigationProp<any>
}

const ProductScreen: FC = ({ route, navigation }) => {
	const { productId } = route.params
	const cartProductsIds = useSelector(
		(state: StateInterface) => state.productState.cart
	)
	const allProducts = useSelector(
		(state: StateInterface) => state.productState.products
	)
	const product = allProducts.find(
		(product: ProductProps) => product.id === productId
	)

	const isProductAlreadyInCart = cartProductsIds
		.map((product) => product.id)
		.includes(product?.id)

	const dispatch = useDispatch()

	const addProductToCart = () => {
		dispatch(
			addToCart({
				id: productId,
				quantity: 1,
			})
		)
	}

	if (!product) {
		return (
			<View style={styles.errorMessage}>
				<Text>Product Not Found</Text>
			</View>
		)
	}

	return (
		<View style={styles.main}>
			<Image
				source={{ uri: product.bannerImgUrl }}
				style={{ height: '80%', width: '100%', marginBottom: -120 }}
			/>
			<View style={styles.infoContainer}>
				<View style={styles.titleAndDescription}>
					<View style={{ width: '70%' }}>
						<Text style={styles.title}>{product.title}</Text>
						<ParagraphText>{product.description}</ParagraphText>
					</View>
					<Image
						source={{ uri: product.imageUrl }}
						style={{ width: 80, height: 80 }}
					/>
				</View>

				<View style={styles.priceAndAction}>
					<ParagraphText style={styles.price}>${product.price}</ParagraphText>
					{isProductAlreadyInCart ? (
						<View style={{ alignItems: 'center' }}>
							<Button
								rounded
								style={{
									backgroundColor: Colors.primaryColor,
									paddingHorizontal: 20,
								}}
								onPress={() => navigation.navigate('Cart')}
							>
								<Text style={{ color: 'white' }}>Go to Shopping Cart</Text>
							</Button>
							<ParagraphText style={{ fontSize: 12 }}>
								Already added to Cart
							</ParagraphText>
						</View>
					) : (
						<Button
							disabled={isProductAlreadyInCart}
							rounded
							style={{
								backgroundColor: Colors.primaryColor,
								paddingHorizontal: 20,
							}}
							onPress={addProductToCart}
						>
							<Text style={{ color: 'white' }}>Add To Cart</Text>
						</Button>
					)}
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		height: '100%',
		alignItems: 'center',
	},
	errorMessage: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	infoContainer: {
		backgroundColor: 'white',
		width: '80%',
		minHeight: 200,
		borderRadius: 20,
		padding: 30,
		shadowColor: 'black',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 8,
		elevation: 5,
	},
	titleAndDescription: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	title: {
		fontFamily: 'Roboto_medium',
		fontSize: 22,
		marginBottom: 10,
	},
	priceAndAction: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	price: {
		fontFamily: 'Roboto',
		fontSize: 18,
	},
})

export default ProductScreen
