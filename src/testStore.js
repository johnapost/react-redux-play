import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters,
} from './actions';
import { store } from './store';

// log initial state
console.log(store.getState());

// redux subscribe() returns function which unsubscribes
const unsubscribe =

  // log state changes
  store.subscribe(() => console.log(store.getState()));

// do things
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// unsubscribe
unsubscribe();
