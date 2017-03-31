import { combineReducers } from 'redux';
import TempReducer from './TempReducer';

const rootReducer = combineReducers({
  section: TempReducer
});

export default rootReducer;
