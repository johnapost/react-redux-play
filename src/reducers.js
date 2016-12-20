// @flow

import { combineReducers } from 'redux';

// Actions
import { SET_VISIBILITY_FILTER } from './actions/visibility';
import type {
  VisibilityFilter,
  SetVisibilityFilterAction,
} from './actions/visibility';
import { ADD_TODO, TOGGLE_TODO } from './actions/todo';
import type { TodoAction } from './actions/todo';

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
  if (action.type === ADD_TODO) {
    return [
      ...state,
      {
        text: action.text,
        completed: false,
      },
    ];
  } else if (action.type === TOGGLE_TODO) {
    const actionIndex = action.index;
    return state.map((todo, index: number) => {
      if (index === actionIndex) {
        return Object.assign({}, todo, {
          completed: !todo.completed,
        });
      }
      return todo;
    });
  }

  return state;
}

const todoApp = combineReducers(visibilityFilter, todos);

export default todoApp;
