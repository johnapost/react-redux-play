// @flow

import { combineReducers } from 'redux';

// Actions
import { SET_VISIBILITY_FILTER } from './actions/VisibilityFilterActions';
import type {
  VisibilityFilter,
  SetVisibilityFilterAction,
} from './actions/VisibilityFilterActions';
import { ADD_TODO, TOGGLE_TODO } from './actions/TodoActions';
import type { TodoAction } from './actions/TodoActions';

// Props
import type { TodoProps } from './components/Todo/TodoProps';

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
export function todos(state: Array<TodoProps> = [], action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
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
const todoApp = combineReducers({ visibilityFilter, todos });

export default todoApp;
