import {
  combineReducers,
  createStore,
} from 'redux';
import { stat } from 'fs';

// actions.js
export const changeValue = (value) => ({
  type: 'VALUE',
  value,
});

export const saveForm = (form) => ({
  type: 'FORM',
  form,
});


// reducers.js
export const tabs = (state = {"form":{},value:0}, action) => {
  switch (action.type) {
    case 'FORM':
      return {...state, form: action.form};
    case 'VALUE':
      return {...state, value: action.value};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  tabs,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};

export const store = configureStore();