// @flow

// All todo actions
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// --- ADD_TODO
export type AddTodoAction = {
  type: 'ADD_TODO',
  text: string,
};

export function addTodo(text: string): AddTodoAction {
  return { type: ADD_TODO, text };
}
// ---

// --- TOGGLE_TODO
export type ToggleTodoAction = {
  type: 'TOGGLE_TODO',
  index: number,
};

export function toggleTodo(index: number): ToggleTodoAction {
  return { type: TOGGLE_TODO, index };
}
// ---

export type TodoAction = AddTodoAction | ToggleTodoAction;
