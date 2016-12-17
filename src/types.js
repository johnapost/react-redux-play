// @flow

export type TodoType = {
  completed: bool,
  id: number,
  onClick: Function,
  text: string,
};

export type TodoListType = {
  todos: Array<TodoType>,
  onTodoClick: Function,
};

export type LinkType = {
  active: bool,
  children: string,
  onClick: Function,
}

export type VisibilityFilter =
  { SHOW_ALL: 'SHOW_ALL' } |
  { SHOW_COMPLETED: 'SHOW_COMPLETED' } |
  { SHOW_ACTIVE: 'SHOW_ACTIVE' }
