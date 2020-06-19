import React from 'react';
import { View, StyleSheet, Image} from 'react-native';

export const FullScreen = ({ navigation }) => {
	let url = navigation.getParam('url');

	return (
		<View style={styles.wrapper}>
			<Image source={{ uri: url }} style={styles.image} />
		</View>
	);
}

FullScreen.navigationOptions = {
	headerTitle: 'Photo'
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	image: {
		height: '100%',
		width: '100%',
	}
})