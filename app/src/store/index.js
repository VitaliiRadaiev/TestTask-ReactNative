import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { galleryReducer } from './reducers/galleryReducer';

const rootReducer = combineReducers({
	gallery: galleryReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));