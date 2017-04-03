import { BOOK_SELECTED } from '../actions/index';

// State argument is not application state,
// only the state that this reducer is responsible for.
export default function(state = null, action){
  switch(action.type){
    case BOOK_SELECTED:
      return action.payload;
      break;
    default:
      return state;
  }
}
