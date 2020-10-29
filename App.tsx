import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import MainNavigator from './navigators/mainNavigator'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

const fetchFonts = () => {
	return Font.loadAsync({
		Roboto: require('native-base/Fonts/Roboto.ttf'),
		Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		...Ionicons.font,
	})
}

const httpLink = createHttpLink({
	uri: 'https://cuteeness.myshopify.com/api/graphql',
})

const middlewareLink = setContext(() => ({
	headers: {
		'X-Shopify-Storefront-Access-Token': 'b3acae441cb320f2a029051872dc8497',
	},
}))

const client = new ApolloClient({
	link: middlewareLink.concat(httpLink),
	cache: new InMemoryCache(),
})

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false)

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
			/>
		)
	}

	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<MainNavigator />
			</Provider>
		</ApolloProvider>
	)
}
