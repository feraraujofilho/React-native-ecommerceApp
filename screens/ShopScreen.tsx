import React, { FC } from 'react'
import { useQuery } from 'react-apollo'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductCardShop from '../components/ProductCardShop'
import StateInterface from '../store/statetypes'
import { FIRST_PRODUCTS } from '../apollo/queries/queries'

interface ShopScreenProps {
	navigation: any
}

const ShopScreen: FC<ShopScreenProps> = (props) => {
	const { data, error } = useQuery(FIRST_PRODUCTS)

	const allProductsFromApi = data?.products?.edges

	const allProducts = useSelector(
		(state: StateInterface) => state.productState.products
	)

	const renderProductCard = (itemData: any) => {
		return (
			<ProductCardShop item={itemData.item} navigation={props.navigation} />
		)
	}

	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.lineContainer}>
				<View style={styles.line} />
				<Text style={styles.header}>Best Products</Text>
				<View style={styles.line} />
			</View>
			<FlatList
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				data={allProductsFromApi}
				renderItem={renderProductCard}
				numColumns={2}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#f3f1f4',
		alignItems: 'center',
	},
	productBox: {
		borderBottomStartRadius: 10,
		borderBottomEndRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 5,
	},
	line: {
		backgroundColor: '#a2a5b0',
		height: 0.5,
		width: '20%',
		alignSelf: 'center',
		marginHorizontal: 10,
	},
	header: {
		color: '#a2a5b0',
		fontFamily: 'Roboto',
	},
	lineContainer: {
		flexDirection: 'row',
		marginTop: 30,
		marginBottom: 10,
	},
})

export default ShopScreen
