import { combineReducers } from 'redux';

const initialState = {
  number: "007"
}

const numberReducer = (state = initialState, action) => {
  return state;
}

const rootReducer = combineReducers({
  number: numberReducer
});

export default rootReducer;