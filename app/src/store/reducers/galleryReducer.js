import { LOAD_GALLERY } from '../types';

const innitialState = {
	allPhotos: [],
}

export const galleryReducer = (state = innitialState, action) => {
	switch (action.type) {
		case LOAD_GALLERY:
			return { ...state, allPhotos: [...action.payload]}
			break;
		default:
			 return state
			break;
	}
}