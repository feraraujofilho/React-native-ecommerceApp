import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProductProps from '../types/ProductProps'

interface ProductCardShopProps {
	navigation: any
	item: any
}

const ProductCardShop: FC<ProductCardShopProps> = ({ navigation, item }) => {
	return (
		<View style={styles.gridItem}>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate('Product', {
						productId: item.node.id,
					})
				}
			>
				<Image
					source={{ uri: item.node.variants.edges[0].node.image.src }}
					style={styles.bgImage}
				/>
				<Text numberOfLines={2} style={styles.text}>
					{item.node.title}
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	gridItem: {
		marginVertical: 15,
		marginHorizontal: 15,
		height: 150,
		width: 150,
		backgroundColor: '#fff',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'black',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 8,
		elevation: 5,
	},
	bgImage: {
		width: 100,
		height: 100,
		alignSelf: 'center',
	},
	text: {
		fontFamily: 'Roboto',
		textAlign: 'center',
		paddingHorizontal: 10,
	},
})

export default ProductCardShop
