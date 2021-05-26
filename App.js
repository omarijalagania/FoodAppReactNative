import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts = () => {
	Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};

export default function App() {
	const [fontLoading, setFontLoading] = useState(false);

	if (!fontLoading) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoading(true)}
				onError={() => console.log('error')}
			/>
		);
	}

	return <MealsNavigator />;
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
