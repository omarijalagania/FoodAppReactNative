import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = (props) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<Text>{props.itemData.item.title}</Text>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{props.duration}m</Text>
						<Text>{props.affordability}</Text>
						<Text>{props.complexity}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#ccc',
	},

	mealRow: {
		flexDirection: 'row',
	},
	mealHeader: {
		height: '90%',
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
	},
});

export default MealItem;
