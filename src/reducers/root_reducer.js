import { combineReducers } from 'redux';
import { raceReducer } from './race_reducer';

const rootReducer = combineReducers({
  race: raceReducer,
});

export default rootReducer;
