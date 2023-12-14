// store.js

import { createStore } from 'redux';
import rootReducer from './reducer'; // Create a file for reducers

const store = createStore(rootReducer);

export default store;
