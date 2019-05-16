import { combineReducers } from 'redux';

// Reducers 
import algoReducer from './algo-reducer';
import inputReducer from './input-reducer';
import activeReducer from './active-reducer';

// Combine Reducers
const reducers = combineReducers({
	algoState: algoReducer,
	inputState: inputReducer,
	activeState: activeReducer
});

export default reducers;
