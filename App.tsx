import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainNavigator from './navigators/mainNavigator';
import * as Font from "expo-font"
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';


const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }


  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

