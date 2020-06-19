import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, FlatList,  Button } from 'react-native';
import { loadGallery } from '../store/action/galleryAction';
import { Preview } from '../components/Preview';
import { useHoc } from '../hoc/useHoc';

const Main = ({ getText, navigation }) => {

	console.log(getText())

	const dispatch = useDispatch();
	const data = useSelector((state) => state.gallery.allPhotos);
	useEffect(() => {
		if(!data.length) {
			dispatch(loadGallery())
		}
	}, [])
	
	const openFullScreen = (url) => {
		navigation.navigate('Full', { url: url })
	}


	return (
		<View  style={styles.wrapper}>
			<FlatList
				data={data}
				keyExtractor={post => post.id.toString()}
				renderItem={({ item }) => <Preview
											urlThumb={item.urls.thumb}
											urlRegular={item.urls.regular}
											author={item.user.first_name}
											desc={item.alt_description}
											openFullScreen={openFullScreen}
				 						/>}
			/>
		</View>
	);
}

Main.navigationOptions = {
	headerTitle: 'Gallery'
}

const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 10
	},
})

export const MainScreen = useHoc(Main);