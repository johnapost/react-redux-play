// @flow

export type TodoListType = {
  todos: Array<TodoType>,
  onTodoClick: (number) => void,
}

export type LinkType = {
  active: bool,
  children: string,
  onClick: Function,
}
