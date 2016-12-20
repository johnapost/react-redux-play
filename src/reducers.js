// @flow

import { combineReducers } from 'redux';

// Dependencies
import type {
  VisibilityFilter,
  SetVisibilityFilterAction,
} from './actions/visibility';
import { SET_VISIBILITY_FILTER } from './actions/visibility';
import { ADD_TODO, TOGGLE_TODO } from './actions/todo';

// Update visibility state
export function visibilityFilter(
  state: VisibilityFilter = 'SHOW_ALL', action: SetVisibilityFilterAction
) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// Update todos state
export function todos(state: Array<TodoType> = [], action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers(visibilityFilter, todos);

export default todoApp;
