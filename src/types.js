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
