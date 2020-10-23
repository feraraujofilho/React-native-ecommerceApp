import React, { useEffect, useCallback, useReducer } from 'react'
import {
	View,
	ScrollView,
	StyleSheet,
	Alert,
	KeyboardAvoidingView,
	Text,
	TextInput,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import * as productsActions from '../store/products/actions'
import Input from '../components/Input'
import StateInterface from '../store/statetypes'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
	if (action.type === FORM_INPUT_UPDATE) {
		const updatedValues = {
			...state.inputValues,
			[action.input]: action.value,
		}
		const updatedValidities = {
			...state.inputValidities,
			[action.input]: action.isValid,
		}

		let updateFormIsValid = true

		for (const key in updatedValidities) {
			updateFormIsValid = updateFormIsValid && updatedValidities[key]
		}

		return {
			inputValues: updatedValues,
			inputValidities: updatedValidities,
			formIsValid: updateFormIsValid,
		}
	}
	return state
}

const EditProductScreen = ({ route, navigation }) => {
	const prodId = route.params?.productId

	const editedProduct = useSelector((state: StateInterface) =>
		state.userProductsState.userProducts.find((prod) => prod.id === prodId)
	)

	const dispatch = useDispatch()

	const [formState, dispatchFormState] = useReducer<any>(formReducer, {
		inputValues: {
			title: editedProduct ? editedProduct.title : '',
			imageUrl: editedProduct ? editedProduct.imageUrl : '',
			description: editedProduct ? editedProduct.description : '',
			price: '',
			bannerImgUrl: editedProduct?.bannerImgUrl ?? '',
		},
		inputValidities: {
			title: editedProduct ? true : false,
			imageUrl: editedProduct ? true : false,
			description: editedProduct ? true : false,
			price: editedProduct ? true : false,
			bannerImgUrl: editedProduct ? true : false,
		},
		formIsValid: editedProduct ? true : false,
	})

	const submitHandler = useCallback(() => {
		if (!formState.formIsValid) {
			Alert.alert('Wrong input', 'Please check the errors in the form.', [
				{ text: 'Okay' },
			])
			return
		}
		if (editedProduct && prodId) {
			dispatch(
				productsActions.updateProduct({
					id: prodId,
					title: formState.inputValues.title,
					description: formState.inputValues.description,
					imageUrl: formState.inputValues.imageUrl,
					price: +formState.inputValues.price,
					bannerImgUrl: formState.inputValues.bannerImgUrl,
				})
			)
		} else {
			dispatch(
				productsActions.createProduct({
					title: formState.inputValues.title,
					description: formState.inputValues.description,
					imageUrl: formState.inputValues.imageUrl,
					price: +formState.inputValues.price,
					bannerImgUrl: formState.inputValues.bannerImgUrl,
				})
			)
		}
		navigation.goBack()
	}, [dispatch, prodId, formState])

	useEffect(() => {
		navigation.setParams({ submit: submitHandler })
	}, [submitHandler])

	const inputChangeHandler = useCallback(
		(inputIdentifier, inputValue, inputValidity) => {
			dispatchFormState({
				type: FORM_INPUT_UPDATE,
				value: inputValue,
				isValid: inputValidity,
				input: inputIdentifier,
			})
		},
		[dispatchFormState]
	)

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
			<ScrollView>
				<View style={styles.form}>
					<Input
						id="title"
						label="Title"
						errorText="Please enter a valid title!"
						autoCapitalize="sentences"
						returnKeyType="next"
						onInputChange={inputChangeHandler}
						initialValue={editedProduct ? editedProduct.title : ''}
						initiallyValid={!!editedProduct}
						required
					/>
					<Input
						id="description"
						label="Description"
						errorText="Please enter a valid Description!"
						autoCapitalize="sentences"
						returnKeyType="next"
						multiline
						autoCorrect
						onInputChange={inputChangeHandler}
						initialValue={editedProduct ? editedProduct.description : ''}
						initiallyValid={!!editedProduct}
						required
						minLength={5}
					/>
					<Input
						id="price"
						label="Price"
						errorText="Please enter a valid Price!"
						returnKeyType="next"
						keyboardType="decimal-pad"
						onInputChange={inputChangeHandler}
						initialValue={editedProduct ? editedProduct.price : ''}
						initiallyValid={!!editedProduct}
						required
					/>
					<Input
						id="imageUrl"
						label="Image Url"
						errorText="Please enter a valid ImageUrl!"
						autoCapitalize="sentences"
						returnKeyType="next"
						onInputChange={inputChangeHandler}
						initialValue={editedProduct ? editedProduct.imageUrl : ''}
						initiallyValid={!!editedProduct}
						required
					/>
					<Input
						id="bannerImgUrl"
						label="Banner Image"
						errorText="Please enter a valid url"
						autoCapitalize="sentences"
						returnKeyType="next"
						onInputChange={inputChangeHandler}
						initialValue={editedProduct ? editedProduct.bannerImgUrl : ''}
						initiallyValid={!!editedProduct}
					/>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	form: {
		margin: 20,
	},
	formControl: {
		width: '100%',
	},
	label: {
		fontFamily: 'open-sans',
		marginVertical: 8,
	},
	input: {
		paddingHorizontal: 2,
		paddingVertical: 5,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
})

export default EditProductScreen
