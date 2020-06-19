import * as Font from 'expo-font';
import { loadGallery } from './store/action/galleryAction';

export async function bootstrap() {
	try {
		await Font.loadAsync({
		  'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
		  'open-regular': require('../assets/fonts/OpenSans-Regular.ttf')
		})

	} catch(e) {
		console.log(e);
	}
}