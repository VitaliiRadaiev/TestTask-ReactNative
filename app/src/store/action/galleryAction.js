import { LOAD_GALLERY } from '../types';
import { Http } from '../../http';

export const loadGallery = () => async (dispatch) => {
	const data = await Http.get('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');
	dispatch({
		type: LOAD_GALLERY,
		payload: data
	})
}