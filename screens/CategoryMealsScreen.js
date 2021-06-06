import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
	const renderMealItem = (itemData) => {
		return (
			<MealItem
				itemData={itemData}
				duration={itemData.item.duration}
				affordability={itemData.item.affordability}
				complexity={itemData.item.complexity}
				onSelectMeal={() => {}}
			/>
		);
	};
	const catId = props.navigation.getParam('categoryId');
	const displayMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayMeals}
				renderItem={renderMealItem}
				style={{ width: '100%' }}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
	return {
		headerTitle: selectedCategory.title,
		headerStyle: {
			backgroundColor:
				Platform.OS === 'android' ? Colors.primaryColor : 'white',
		},
		headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
