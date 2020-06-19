import React from 'react';
	import{ View, 
			Text, 
			StyleSheet,
			ImageBackground,  
			TouchableOpacity
	} from 'react-native';
import { useHoc } from '../hoc/useHoc';	

const PreviewContainer = ({getText, urlThumb, urlRegular, author, desc, openFullScreen }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => {
			openFullScreen(urlRegular);
			console.log(getText())
		}}>
			<View style={styles.wrapper}>
				<View style={styles.imageWrap}>
					<ImageBackground style={styles.image} source={{ uri: urlThumb}}/>
				</View>	
				<View style={styles.textWrap}>
					<View style={styles.authorWrap}>
						<Text style={styles.author}>{author}</Text>
					</View>
					<View style={styles.descWrap}>
						<Text style={styles.desc}>{desc ? desc : 'No no description.'}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export const Preview = useHoc(PreviewContainer);

const styles = 	StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		marginVertical: 10,
		backgroundColor: 'rgba(0,0,0,0.1)',
		borderRadius: 10,
		padding: 10,
	},
	imageTouch: {

		height: 110,
		width: '35%',
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	imageWrap: {
		width: '100%',
		height: '100%',
		height: 110,
		width: '35%',
	},
	image: {
		position: 'absolute',
		bottom:0,
		height: '100%',
		width: '100%',
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	textWrap: {
		width: '65%',
		paddingLeft: 15,
	},
	authorWrap: {
		alignItems: 'center'
	},
	author: {
		fontFamily: 'open-bold',
		fontSize: 20
	},
	descWrap: {
		alignItems: 'center',
		marginTop: 5,
	},
	desc: {
		fontSize: 14,
		fontFamily: 'open-regular',
		textAlign: 'center',
	}
})