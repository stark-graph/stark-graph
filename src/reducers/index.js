import { combineReducers } from 'redux';

// reducers
import activeReducer from './active-reducer';

// combine reducers
const reducers = combineReducers({
  activeState: activeReducer,
});

export default reducers;
