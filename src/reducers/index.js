import { combineReducers } from 'redux';

// Reducers
import algoReducer from './algo-reducer';
import activeReducer from './active-reducer';

// Combine Reducers
const reducers = combineReducers({
  algoState: algoReducer,
  activeState: activeReducer,
});

export default reducers;
