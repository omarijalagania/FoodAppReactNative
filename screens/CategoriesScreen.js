import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Platform,
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity
				style={styles.gridItem}
				onPress={() =>
					props.navigation.navigate({
						routeName: 'CategoryMeals',
						params: {
							categoryId: itemData.item.id,
						},
					})
				}
			>
				<View
					style={{
						...styles.itemColors,
						...{ backgroundColor: itemData.item.color },
					}}
				>
					<Text numberOfLines={2} style={styles.title}>
						{itemData.item.title}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

CategoriesScreen.navigationOptions = {
	headerTitle: 'Categories Meals',
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
	itemColors: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		padding: 15,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 3,
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
	},
});

export default CategoriesScreen;
