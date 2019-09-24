import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// this is a reducer
const firstReducer = (state = 0, action) => {  
  if (action.type === 'BUTTON_ONE') {
    state++;
    console.log('hello from the first reducer. What’s the state?', state);
  }
  return state; // reducers MUST return SOMETHING other than undefined
}

const secondReducer = (state = 100, action) => {
  if (action.type === 'BUTTON_TWO') {
    state--;
    console.log('hello from the second reducer; state:', state);
  }
  return state;
}

const addElementReducer = (state={}, action) => {
  if(action.type === 'ADD_ELEMENT') {
    console.log(`Enjoy some delicious ${action.payload}!`);
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    firstReducer,
    secondReducer,
    addElementReducer
  })
);


ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
