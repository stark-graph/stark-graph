import { combineReducers } from 'redux';

// Reducers
import activeReducer from './active-reducer';

// Combine Reducers
const reducers = combineReducers({
  activeState: activeReducer,
});

export default reducers;
