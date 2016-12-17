import { createStore } from 'redux';
import { todoApp } from './app';

const store = createStore(todoApp);

export default store;
