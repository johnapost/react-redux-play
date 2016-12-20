// @flow

let nextTodoId = 0;

// All todo actions
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// --- ADD_TODO
export type AddTodoAction = {
  type: 'ADD_TODO',
  id: number,
  text: string,
};

export function addTodo(text: string): AddTodoAction {
  nextTodoId += 1;
  return { type: ADD_TODO, id: nextTodoId, text };
}
// ---

// --- TOGGLE_TODO
export type ToggleTodoAction = {
  type: 'TOGGLE_TODO',
  id: number,
};

export function toggleTodo(id: number): ToggleTodoAction {
  return { type: TOGGLE_TODO, id };
}
// ---

export type TodoAction = AddTodoAction | ToggleTodoAction;
