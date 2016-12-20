// @flow

import type { TodoType } from '../Todo/TodoType';

export type TodoListType = {
  todos: Array<TodoType>,
  onTodoClick: (number) => void,
};
