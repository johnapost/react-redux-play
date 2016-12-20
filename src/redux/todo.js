// @flow

// Types
import type { TodoProps } from '../components/Todo/TodoProps';

export type AddTodoAction = { type: 'ADD_TODO', id: number, text: string, };
export type ToggleTodoAction = { type: 'TOGGLE_TODO', id: number, };
export type TodoAction = AddTodoAction | ToggleTodoAction;

// Actions
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Reducer
export default function reducer(
  state: Array<TodoProps> = [], action: TodoAction
) {
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

// Action Creators
let nextTodoId = 0;

export function addTodo(text: string): AddTodoAction {
  nextTodoId += 1;
  return { type: ADD_TODO, id: nextTodoId, text };
}

export function toggleTodo(id: number): ToggleTodoAction {
  return { type: TOGGLE_TODO, id };
}
