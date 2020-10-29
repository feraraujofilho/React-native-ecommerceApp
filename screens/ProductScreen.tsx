import React, { FC } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import ProductProps from '../types/ProductProps'
import { useDispatch, useSelector } from 'react-redux'
import StateInterface from '../store/statetypes'
import { addToCart } from '../store/cart/actions'
import { Button } from 'native-base'
import ParagraphText from '../components/ParagraphText'
import Colors from '../constants/Colors'
import { useQuery } from 'react-apollo'
import { SINGLE_PRODUCT } from '../apollo/queries/queries'

interface ProductScreenProps {
	navigation: StackNavigationProp<any>
}

const ProductScreen: FC = ({ route, navigation }) => {
	const { productId } = route.params
	const { data, error, loading } = useQuery(SINGLE_PRODUCT, {
		variables: {
			id: productId,
		},
	})

	const productFromApi = data?.node


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

	if (loading) {
		return <ActivityIndicator size={35} color={Colors.primaryColor} />
	}

	return (
		<View style={styles.main}>
			<Image
				source={{
					uri: productFromApi.images.edges[1].node.originalSrc,
				}}
				style={{ height: '80%', width: '100%', marginBottom: -120 }}
			/>
			<View style={styles.infoContainer}>
				<View style={styles.titleAndDescription}>
					<View style={{ width: '70%' }}>
						<Text style={styles.title}>{productFromApi.title}</Text>
						<ParagraphText style={{ width: '140%' }}>
							{productFromApi.description.slice(0, 100)}...
						</ParagraphText>
					</View>
					<Image
						source={{ uri: productFromApi.images.edges[0].node.originalSrc }}
						style={{ width: 80, height: 80 }}
					/>
				</View>

				<View style={styles.priceAndAction}>
					<ParagraphText style={styles.price}>
						${productFromApi.variants.edges[0].node.price}
					</ParagraphText>
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
