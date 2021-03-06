import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';

const MealItem = (props) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.itemData.item.imageUrl }}
							style={styles.bgImage}
						>
							<Text style={styles.title} numberOfLines={1}>
								{props.itemData.item.title}
							</Text>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{props.duration}m</Text>
						<Text>{props.affordability.toUpperCase()}</Text>
						<Text>{props.complexity.toUpperCase()}</Text>
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
		height: '85%',
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%',
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: 'white',
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingHorizontal: 5,
		paddingVertical: 12,
		textAlign: 'center',
	},
});

export default MealItem;
